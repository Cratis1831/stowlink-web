import fs from "node:fs";
import path from "node:path";
import react from "@vitejs/plugin-react";
import { createServer, type Plugin } from "vite";
import { loadPublishedPosts, stowlinkBlog } from "./vite.blog";
import {
  articlePageSeo,
  notFoundPage,
  pages,
  robotsTxt,
  rssXml,
  seoHeadHtml,
  sitemapXml,
  type PageSeo,
} from "./src/seo";

const HEAD_START = "<!--seo-head-->";
const HEAD_END = "<!--/seo-head-->";

export function stowlinkSeo(): Plugin {
  return {
    name: "stowlink-seo",
    apply: "build",
    closeBundle: {
      sequential: true,
      async handler() {
        const dist = path.resolve("dist");
        const indexPath = path.join(dist, "index.html");
        const built = withInlinedCss(fs.readFileSync(indexPath, "utf8"), dist);

        const server = await createServer({
          configFile: false,
          root: process.cwd(),
          server: { middlewareMode: true, hmr: false },
          appType: "custom",
          resolve: {
            alias: { "@": path.resolve(process.cwd(), "src") },
          },
          plugins: [react(), stowlinkBlog()],
          logLevel: "error",
        });

        try {
          const { render } = (await server.ssrLoadModule("/src/entry-server.tsx")) as {
            render: (url: string) => string;
          };
          const posts = loadPublishedPosts();
          const prerenderPages: PageSeo[] = [...pages, ...posts.map(articlePageSeo)];

          for (const page of prerenderPages) {
            const html = withPrerender(withSeoHead(built, page), render(page.path));
            if (page.path === "/") {
              fs.writeFileSync(indexPath, html);
              continue;
            }

            const dir = path.join(dist, page.path.slice(1));
            fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(path.join(dir, "index.html"), html);
          }

          fs.writeFileSync(
            path.join(dist, "404.html"),
            withPrerender(withSeoHead(built, notFoundPage), render("/__not-found")),
          );
          fs.writeFileSync(path.join(dist, "robots.txt"), robotsTxt());
          fs.writeFileSync(
            path.join(dist, "sitemap.xml"),
            sitemapXml(
              posts.map((post) => ({
                path: `/blog/${post.slug}`,
                lastmod: post.metadata.updated ?? post.metadata.date,
                images: post.metadata.image
                  ? [{ loc: post.metadata.image, title: post.metadata.title }]
                  : undefined,
              })),
            ),
          );
          fs.writeFileSync(path.join(dist, "rss.xml"), rssXml(posts));
        } finally {
          await server.close();
        }
      },
    },
  };
}

function withInlinedCss(html: string, dist: string): string {
  return html.replace(/<link\b[^>]*\brel="stylesheet"[^>]*>/gi, (tag) => {
    const href = tag.match(/\bhref="([^"]+)"/i)?.[1];
    if (!href || !href.startsWith("/assets/") || !href.endsWith(".css")) {
      return tag;
    }

    const cssPath = path.join(dist, href.slice(1));
    const css = fs.readFileSync(cssPath, "utf8").replace(/<\/style>/gi, "<\\/style>");
    return `<style>${css}</style>`;
  });
}

function withSeoHead(html: string, page: PageSeo): string {
  const start = html.indexOf(HEAD_START);
  const end = html.indexOf(HEAD_END);

  if (start === -1 || end === -1 || end < start) {
    throw new Error("index.html is missing the seo-head markers.");
  }

  return `${html.slice(0, start)}${HEAD_START}\n${seoHeadHtml(page)}\n    ${html.slice(end)}`;
}

function withPrerender(html: string, markup: string): string {
  const body = markup.replace(/<link rel="preload"[^>]*>/g, "");
  const replaced = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  if (replaced === html) {
    throw new Error("Could not inject prerendered markup into #root.");
  }
  return replaced;
}

import fs from "node:fs";
import path from "node:path";
import react from "@vitejs/plugin-react";
import { createServer, type Plugin } from "vite";
import { notFoundPage, pages, robotsTxt, seoHeadHtml, sitemapXml, type PageSeo } from "./src/seo";

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
        const built = fs.readFileSync(indexPath, "utf8");

        const server = await createServer({
          configFile: false,
          root: process.cwd(),
          server: { middlewareMode: true, hmr: false },
          appType: "custom",
          resolve: {
            alias: { "@": path.resolve(process.cwd(), "src") },
          },
          plugins: [react()],
          logLevel: "error",
        });

        try {
          const { render } = (await server.ssrLoadModule("/src/entry-server.tsx")) as {
            render: (url: string) => string;
          };

          for (const page of pages) {
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
          fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemapXml());
        } finally {
          await server.close();
        }
      },
    },
  };
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

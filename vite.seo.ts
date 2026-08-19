import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { notFoundPage, pages, robotsTxt, seoHeadHtml, sitemapXml, type PageSeo } from "./src/seo";

const HEAD_START = "<!--seo-head-->";
const HEAD_END = "<!--/seo-head-->";

export function stowlinkSeo(): Plugin {
  return {
    name: "stowlink-seo",
    apply: "build",
    closeBundle: {
      sequential: true,
      handler() {
        const dist = path.resolve("dist");
        const indexPath = path.join(dist, "index.html");
        const built = fs.readFileSync(indexPath, "utf8");

        for (const page of pages) {
          const html = withSeoHead(built, page);
          if (page.path === "/") {
            fs.writeFileSync(indexPath, html);
            continue;
          }

          const dir = path.join(dist, page.path.slice(1));
          fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(path.join(dir, "index.html"), html);
        }

        fs.writeFileSync(path.join(dist, "404.html"), withSeoHead(built, notFoundPage));
        fs.writeFileSync(path.join(dist, "robots.txt"), robotsTxt());
        fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemapXml());
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

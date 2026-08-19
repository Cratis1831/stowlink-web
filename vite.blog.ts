import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import type { Plugin } from "vite";
import type { BlogPost, BlogPostMetadata } from "./src/types/blog";

export const BLOG_VIRTUAL_ID = "virtual:stowlink-blog";
const BLOG_RESOLVED_ID = `\0${BLOG_VIRTUAL_ID}`;
const WORDS_PER_MINUTE = 225;

export function blogDir(): string {
  return path.resolve(process.cwd(), "content/blog");
}

export function loadPublishedPosts(): BlogPost[] {
  return loadAllPosts().filter((post) => post.metadata.published);
}

export function loadAllPosts(): BlogPost[] {
  const dir = blogDir();
  if (!fs.existsSync(dir)) {
    return [];
  }

  const posts = fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
    .map((name) => readPost(path.join(dir, name)));

  posts.sort((a, b) => {
    const byDate = b.metadata.date.localeCompare(a.metadata.date);
    return byDate !== 0 ? byDate : a.slug.localeCompare(b.slug);
  });

  return posts;
}

export function stowlinkBlog(): Plugin {
  return {
    name: "stowlink-blog",
    resolveId(id) {
      if (id === BLOG_VIRTUAL_ID) {
        return BLOG_RESOLVED_ID;
      }
    },
    load(id) {
      if (id !== BLOG_RESOLVED_ID) {
        return;
      }

      const dir = blogDir();
      this.addWatchFile(dir);
      for (const file of listPostFiles()) {
        this.addWatchFile(file);
      }

      return `export const posts = ${JSON.stringify(loadPublishedPosts())};`;
    },
    configureServer(server) {
      const dir = blogDir();
      if (fs.existsSync(dir)) {
        server.watcher.add(dir);
      }

      const reload = (file: string) => {
        if (!isBlogSource(file)) {
          return;
        }
        const mod = server.moduleGraph.getModuleById(BLOG_RESOLVED_ID);
        if (mod) {
          void server.reloadModule(mod);
        }
      };

      server.watcher.on("add", reload);
      server.watcher.on("change", reload);
      server.watcher.on("unlink", reload);
    },
  };
}

function listPostFiles(): string[] {
  const dir = blogDir();
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
    .map((name) => path.join(dir, name));
}

function isBlogSource(file: string): boolean {
  const normalized = path.resolve(file);
  return normalized.startsWith(`${blogDir()}${path.sep}`) && /\.mdx?$/.test(normalized);
}

function readPost(filePath: string): BlogPost {
  const filename = path.basename(filePath);
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(filePath, "utf8");
  assertPlainProse(raw, filename);
  const parsed = matter(raw);
  const metadata = parseMetadata(parsed.data, filename);
  const html = stripLeadingH1(
    remark().use(remarkHtml, { sanitize: false }).processSync(parsed.content).toString(),
  );

  return {
    slug,
    metadata,
    content: html,
    readingTime: readingTimeMinutes(parsed.content),
  };
}

function parseMetadata(data: Record<string, unknown>, filename: string): BlogPostMetadata {
  const title = requireString(data.title, "title", filename);
  const description = requireString(data.description, "description", filename);
  const date = asDateString(data.date, "date", filename);
  const author = requireString(data.author, "author", filename);
  const updated = data.updated == null ? undefined : asDateString(data.updated, "updated", filename);
  const category = optionalString(data.category);
  const image = optionalString(data.image);
  const keywords = asStringArray(data.keywords, filename);
  const published = data.published !== false;

  return {
    title,
    description,
    date,
    updated,
    author,
    category,
    image,
    keywords,
    published,
  };
}

function requireString(value: unknown, field: string, filename: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Blog post ${filename} is missing a valid ${field}.`);
  }
  return value.trim();
}

function optionalString(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
}

function asDateString(value: unknown, field: string, filename: string): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value.trim())) {
    return value.trim().slice(0, 10);
  }

  throw new Error(`Blog post ${filename} has an invalid ${field}. Use YYYY-MM-DD.`);
}

function asStringArray(value: unknown, filename: string): string[] | undefined {
  if (value == null) {
    return undefined;
  }
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    throw new Error(`Blog post ${filename} keywords must be a list of strings.`);
  }
  return value.map((item) => item.trim()).filter(Boolean);
}

function readingTimeMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

function stripLeadingH1(html: string): string {
  return html.replace(/^\s*<h1\b[^>]*>[\s\S]*?<\/h1>/i, "").trim();
}

const EM_DASH = "\u2014";
const EM_DASH_ENTITIES = /&mdash;|&#8212;|&#x2014;/i;
const EMOJI = /\p{Extended_Pictographic}/u;

function assertPlainProse(raw: string, filename: string): void {
  const prose = stripFencedCode(raw);

  if (prose.includes(EM_DASH) || EM_DASH_ENTITIES.test(prose)) {
    throw new Error(
      `Blog post ${filename} contains an em dash. Use a comma, period, colon, or hyphen instead.`,
    );
  }

  if (EMOJI.test(prose)) {
    throw new Error(`Blog post ${filename} contains an emoji. Write the post in plain text.`);
  }
}

function stripFencedCode(raw: string): string {
  return raw.replace(/```[\s\S]*?```/g, "");
}

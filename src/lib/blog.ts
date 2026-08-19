import { posts } from "virtual:stowlink-blog";
import { articlePageSeo, notFoundPage, pageForPath, type PageSeo } from "../seo";
import type { BlogPost } from "../types/blog";

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((post) => post.slug);
}

export function getLatestPosts(count = 3): BlogPost[] {
  return posts.slice(0, count);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post?.metadata.category) {
    return posts.filter((item) => item.slug !== slug).slice(0, count);
  }

  const sameCategory = posts.filter(
    (item) => item.slug !== slug && item.metadata.category === post.metadata.category,
  );
  if (sameCategory.length >= count) {
    return sameCategory.slice(0, count);
  }

  const extras = posts.filter(
    (item) => item.slug !== slug && item.metadata.category !== post.metadata.category,
  );
  return [...sameCategory, ...extras].slice(0, count);
}

export function formatPostDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function pageSeoForPath(pathname: string): PageSeo {
  const normalized = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const match = /^\/blog\/([^/]+)$/.exec(normalized);
  if (match) {
    const post = getPostBySlug(match[1]);
    return post ? articlePageSeo(post) : notFoundPage;
  }
  return pageForPath(normalized);
}

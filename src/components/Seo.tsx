import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageSeoForPath } from "@/lib/blog";
import {
  absoluteUrl,
  jsonLdFor,
  ogImageHeight,
  ogImagePath,
  ogImageWidth,
  siteMotto,
  siteName,
  type PageSeo,
} from "../seo";

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    applyPageSeo(pageSeoForPath(pathname));
  }, [pathname]);

  return null;
}

function applyPageSeo(page: PageSeo) {
  const url = page.path === "/404" ? absoluteUrl("/") : absoluteUrl(page.path);
  const imagePath = page.image ?? ogImagePath;
  const image = absoluteUrl(imagePath);
  const imageAlt = page.imageAlt ?? `${siteName} — ${siteMotto}`;

  document.title = page.title;
  setMeta("name", "description", page.description);
  setMeta("name", "robots", page.robots);
  setMeta("name", "googlebot", page.robots);
  if (page.keywords?.length) {
    setMeta("name", "keywords", page.keywords.join(", "));
  } else {
    removeMeta("name", "keywords");
  }
  setLink("canonical", url);
  setHreflang("en", url);
  setHreflang("x-default", url);
  setRss(`${siteName} Blog`, `${absoluteUrl("/rss.xml")}`);
  setMeta("property", "og:type", page.ogType);
  setMeta("property", "og:site_name", siteName);
  setMeta("property", "og:locale", "en_US");
  setMeta("property", "og:title", page.title);
  setMeta("property", "og:description", page.description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:image", image);
  setMeta("property", "og:image:alt", imageAlt);
  setMeta("property", "og:image:width", String(ogImageWidth));
  setMeta("property", "og:image:height", String(ogImageHeight));
  setMeta("property", "og:image:type", imageMime(imagePath));
  if (page.publishedTime) {
    setMeta("property", "article:published_time", page.publishedTime);
    setMeta("property", "article:modified_time", page.modifiedTime ?? page.publishedTime);
  } else {
    removeMeta("property", "article:published_time");
    removeMeta("property", "article:modified_time");
  }
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", page.title);
  setMeta("name", "twitter:description", page.description);
  setMeta("name", "twitter:image", image);
  setMeta("name", "twitter:image:alt", imageAlt);

  let script = document.getElementById("json-ld");
  if (!script) {
    script = document.createElement("script");
    script.id = "json-ld";
    script.setAttribute("type", "application/ld+json");
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(jsonLdFor(page));
}

function setMeta(kind: "name" | "property", key: string, value: string) {
  const selector = `meta[${kind}="${cssEscape(key)}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(kind, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}

function removeMeta(kind: "name" | "property", key: string) {
  document.head.querySelector(`meta[${kind}="${cssEscape(key)}"]`)?.remove();
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]:not([hreflang]):not([type])`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function setHreflang(lang: string, href: string) {
  let element = document.head.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "alternate");
    element.setAttribute("hreflang", lang);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function setRss(title: string, href: string) {
  let element = document.head.querySelector('link[rel="alternate"][type="application/rss+xml"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "alternate");
    element.setAttribute("type", "application/rss+xml");
    document.head.appendChild(element);
  }
  element.setAttribute("title", title);
  element.setAttribute("href", href);
}

function imageMime(path: string): string {
  if (path.endsWith(".webp")) {
    return "image/webp";
  }
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) {
    return "image/jpeg";
  }
  return "image/png";
}

function cssEscape(value: string): string {
  return value.replace(/"/g, '\\"');
}

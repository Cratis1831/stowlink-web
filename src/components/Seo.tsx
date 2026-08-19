import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  absoluteUrl,
  jsonLdFor,
  ogImageHeight,
  ogImagePath,
  ogImageWidth,
  pageForPath,
  siteName,
  type PageSeo,
} from "../seo";

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    applyPageSeo(pageForPath(pathname));
  }, [pathname]);

  return null;
}

function applyPageSeo(page: PageSeo) {
  const url = page.path === "/404" ? absoluteUrl("/") : absoluteUrl(page.path);
  const image = absoluteUrl(ogImagePath);

  document.title = page.title;
  setMeta("name", "description", page.description);
  setMeta("name", "robots", page.robots);
  setMeta("name", "googlebot", page.robots);
  setLink("canonical", url);
  setHreflang("en", url);
  setHreflang("x-default", url);
  setMeta("property", "og:type", page.ogType);
  setMeta("property", "og:site_name", siteName);
  setMeta("property", "og:locale", "en_US");
  setMeta("property", "og:title", page.title);
  setMeta("property", "og:description", page.description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:image", image);
  setMeta("property", "og:image:alt", `${siteName} for macOS`);
  setMeta("property", "og:image:width", String(ogImageWidth));
  setMeta("property", "og:image:height", String(ogImageHeight));
  setMeta("property", "og:image:type", "image/png");
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", page.title);
  setMeta("name", "twitter:description", page.description);
  setMeta("name", "twitter:image", image);
  setMeta("name", "twitter:image:alt", `${siteName} for macOS`);

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

function setLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
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

function cssEscape(value: string): string {
  return value.replace(/"/g, '\\"');
}

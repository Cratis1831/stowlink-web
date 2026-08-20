export const canonicalOrigin = "https://www.stowlink.app";
export const siteName = "StowLink";
export const siteMotto = "Your links, neatly stowed.";
export const publisherName = "Forgelyte";
export const ogImagePath = "/og.png";
export const ogImageWidth = 1200;
export const ogImageHeight = 630;

export const supportFaqs = [
  {
    id: "find-license",
    question: "Find my license",
    answer:
      "Open Lemon Squeezy My Orders (https://app.lemonsqueezy.com/my-orders) with the email you used at checkout. The receipt also contains the key.",
  },
  {
    id: "move-mac",
    question: "Move to another Mac",
    answer:
      "On a Mac you no longer need, open Settings → License → Deactivate This Mac. Install StowLink on the new Mac and enter the same key. A license works on up to two Macs at a time.",
  },
  {
    id: "reinstall",
    question: "Reinstall StowLink",
    answer:
      "If this Mac still has its Keychain, StowLink reuses the existing activation. If the disk was erased, deactivate the old instance first, then activate again.",
  },
  {
    id: "account",
    question: "Does StowLink require an account?",
    answer:
      "No. StowLink does not require a StowLink account. Optional iCloud sync uses your Apple Account.",
  },
  {
    id: "license-count",
    question: "How many Macs can I use?",
    answer:
      "One license works on up to two Macs at a time. Deactivate a Mac to free that slot.",
  },
  {
    id: "where-data",
    question: "Where does StowLink store my links?",
    answer:
      "Links, folders, notes, and previews stay on your Mac unless you turn on iCloud sync in Settings. StowLink does not run a separate cloud database for your library.",
  },
  {
    id: "icloud",
    question: "How do I enable iCloud sync?",
    answer:
      "Turn on iCloud sync in Settings. Library data then uses your Apple Account and Apple's CloudKit.",
  },
  {
    id: "save-shortcut",
    question: "How do I save a link with the global shortcut?",
    answer:
      "Copy a URL, then press Command-V while StowLink is open. If the window is closed, hold Command and double-tap Shift.",
  },
  {
    id: "spotlight",
    question: "How do I use Spotlight Search?",
    answer:
      "Press Command-K in StowLink to jump to recent links, folders, and settings.",
  },
  {
    id: "updates",
    question: "How do updates work?",
    answer:
      "StowLink checks a public appcast for a newer notarized build. Sparkle updates we publish are included with your license.",
  },
] as const;

export const pricingFaqs = [
  {
    id: "subscription",
    question: "Is StowLink a subscription?",
    answer: "No. StowLink is a one-time purchase. There is no subscription.",
  },
  {
    id: "how-many-macs",
    question: "How many Macs can I use?",
    answer:
      "One license works on up to two Macs at a time. Deactivate a Mac to move that slot.",
  },
  {
    id: "need-account",
    question: "Do I need an account?",
    answer:
      "No StowLink account is required. Optional iCloud sync uses your Apple Account.",
  },
  {
    id: "icloud-sync",
    question: "Does StowLink sync with iCloud?",
    answer:
      "Yes, if you turn it on in Settings. Your library stays on your Mac until you enable iCloud.",
  },
  {
    id: "data-stored",
    question: "Where is my data stored?",
    answer:
      "On your Mac by default. If iCloud sync is on, library data uses your Apple Account. We do not operate a separate cloud database for saved links.",
  },
  {
    id: "macos-version",
    question: "What versions of macOS are supported?",
    answer: "StowLink requires macOS 14 or later.",
  },
  {
    id: "move-license",
    question: "Can I move my license to a new Mac?",
    answer:
      "Yes. Deactivate the old Mac in Settings → License, then activate the new one with the same key.",
  },
  {
    id: "updates-included",
    question: "How do updates work?",
    answer:
      "StowLink checks for notarized Sparkle updates. Updates we publish are included with the license.",
  },
] as const;

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  robots: string;
  inSitemap: boolean;
  ogType: "website" | "article";
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  lastmod?: string;
  author?: string;
  section?: string;
  headline?: string;
};

export type SitemapUrl = {
  path: string;
  lastmod?: string;
  images?: { loc: string; title: string }[];
};

export const pages: PageSeo[] = [
  {
    path: "/",
    title: "StowLink — Bookmark Manager & Link Organizer for Mac",
    description:
      "Save, organize, and find your links with StowLink, a native bookmark manager for Mac. Nested folders, notes, previews, global shortcuts, and optional iCloud sync.",
    robots: "index, follow",
    inSitemap: true,
    ogType: "website",
  },
  {
    path: "/pricing",
    title: "Pricing — StowLink for macOS",
    description:
      "StowLink is a one-time $29 USD license for two Macs. No subscription. Nested folders, search, previews, notes, and optional iCloud sync.",
    robots: "index, follow",
    inSitemap: true,
    ogType: "website",
  },
  {
    path: "/download",
    title: "Download StowLink for macOS",
    description:
      "Download StowLink, a native Mac app for saving and organizing links. Requires macOS 14 or later. One-time purchase, no account required.",
    robots: "index, follow",
    inSitemap: true,
    ogType: "website",
  },
  {
    path: "/features",
    title: "Features — StowLink Bookmark Manager for Mac",
    description:
      "A native bookmark manager for Mac. Save links with a global shortcut, organize them in nested folders, search your library, and keep notes and previews nearby.",
    robots: "index, follow",
    inSitemap: true,
    ogType: "website",
  },
  {
    path: "/support",
    title: "Support — StowLink",
    description:
      "Help with StowLink licenses, moving to another Mac, and reinstalling. Email support@forgelyte.com with your purchase email.",
    robots: "index, follow",
    inSitemap: true,
    ogType: "website",
  },
  {
    path: "/blog",
    title: "Blog — StowLink",
    description:
      "Tips, workflows, and ideas for keeping the links you care about organized on your Mac.",
    robots: "index, follow",
    inSitemap: true,
    ogType: "website",
  },
  {
    path: "/privacy",
    title: "Privacy Policy — StowLink",
    description:
      "StowLink keeps your links on your Mac unless you enable iCloud. How licensing, updates, and this website handle data.",
    robots: "index, follow",
    inSitemap: true,
    ogType: "article",
  },
  {
    path: "/terms",
    title: "Terms of Use — StowLink",
    description:
      "License terms for StowLink. One-time purchase for two Macs, Lemon Squeezy as merchant of record, and what the license includes.",
    robots: "index, follow",
    inSitemap: true,
    ogType: "article",
  },
  {
    path: "/refunds",
    title: "Refund Policy — StowLink",
    description:
      "Request a StowLink refund within 14 days if the app will not launch or a defect blocks licensed use. Email support@forgelyte.com.",
    robots: "index, follow",
    inSitemap: true,
    ogType: "article",
  },
];

export const notFoundPage: PageSeo = {
  path: "/404",
  title: "Page not found — StowLink",
  description:
    "This page does not exist on the StowLink site. Open the product, pricing, download, or support page instead.",
  robots: "noindex, follow",
  inSitemap: false,
  ogType: "website",
};

const sitemapImages: Record<string, { loc: string; title: string }[]> = {
  "/": [
    { loc: ogImagePath, title: "StowLink — Your links, neatly stowed." },
    { loc: "/stowlink-library.webp", title: "StowLink library, preview, and notes" },
    { loc: "/stowlink-folders.webp", title: "StowLink folders and saved links" },
    { loc: "/stowlink-detail.webp", title: "StowLink search results" },
    { loc: "/stowlink-search.webp", title: "StowLink Spotlight Search" },
  ],
};

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (path === "/") {
    return `${canonicalOrigin}/`;
  }

  return `${canonicalOrigin}${path}`;
}

export function pageForPath(pathname: string): PageSeo {
  const normalized = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return pages.find((page) => page.path === normalized) ?? notFoundPage;
}

export function breadcrumbName(path: string): string {
  switch (path) {
    case "/":
      return "Home";
    case "/pricing":
      return "Pricing";
    case "/download":
      return "Download";
    case "/features":
      return "Features";
    case "/support":
      return "Support";
    case "/blog":
      return "Blog";
    case "/privacy":
      return "Privacy";
    case "/terms":
      return "Terms";
    case "/refunds":
      return "Refunds";
    default:
      return "Not found";
  }
}

function faqJsonLd(
  path: string,
  faqs: readonly { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    "@id": `${canonicalOrigin}${path}#faq`,
    url: absoluteUrl(path),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function jsonLdFor(page: PageSeo): unknown {
  const pageUrl = page.path === "/404" ? undefined : absoluteUrl(page.path === "/" ? "/" : page.path);
  const orgId = `${canonicalOrigin}/#organization`;
  const websiteId = `${canonicalOrigin}/#website`;
  const appId = `${canonicalOrigin}/#app`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: publisherName,
      email: "support@forgelyte.com",
      url: canonicalOrigin,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: siteName,
      url: `${canonicalOrigin}/`,
      description: pages[0].description,
      publisher: { "@id": orgId },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": appId,
      name: siteName,
      applicationCategory: "ProductivityApplication",
      operatingSystem: "macOS 14 or later",
      description: pages[0].description,
      url: `${canonicalOrigin}/`,
      image: absoluteUrl(ogImagePath),
      downloadUrl: `${canonicalOrigin}/download`,
      publisher: { "@id": orgId },
      offers: {
        "@type": "Offer",
        price: "29.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${canonicalOrigin}/pricing`,
      },
    },
  ];

  if (pageUrl) {
    const webPage: Record<string, unknown> = {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": appId },
      inLanguage: "en",
    };

    if (page.path !== "/") {
      const crumbs = [
        {
          "@type": "ListItem",
          position: 1,
          name: siteName,
          item: `${canonicalOrigin}/`,
        },
      ];

      if (page.path.startsWith("/blog/") && page.path !== "/blog") {
        crumbs.push({
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: absoluteUrl("/blog"),
        });
        crumbs.push({
          "@type": "ListItem",
          position: 3,
          name: page.headline ?? breadcrumbName(page.path),
          item: pageUrl,
        });
      } else {
        crumbs.push({
          "@type": "ListItem",
          position: 2,
          name: breadcrumbName(page.path),
          item: pageUrl,
        });
      }

      webPage.breadcrumb = {
        "@type": "BreadcrumbList",
        itemListElement: crumbs,
      };
    }

    graph.push(webPage);

    if (page.path.startsWith("/blog/") && page.path !== "/blog") {
      const article: Record<string, unknown> = {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: page.headline ?? page.title,
        description: page.description,
        datePublished: page.publishedTime,
        dateModified: page.modifiedTime ?? page.publishedTime,
        author: {
          "@type": "Organization",
          name: page.author ?? siteName,
        },
        publisher: { "@id": orgId },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
        },
        inLanguage: "en",
      };

      if (page.image) {
        article.image = absoluteUrl(page.image);
      }
      if (page.keywords?.length) {
        article.keywords = page.keywords.join(", ");
      }
      if (page.section) {
        article.articleSection = page.section;
      }

      graph.push(article);
    }
  }

  if (page.path === "/support") {
    graph.push(faqJsonLd("/support", supportFaqs));
  }

  if (page.path === "/pricing") {
    graph.push(faqJsonLd("/pricing", pricingFaqs));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function robotsTxt(): string {
  return [
    "User-agent: *",
    "Allow: /",
    "Disallow: /404.html",
    "",
    `Sitemap: ${canonicalOrigin}/sitemap.xml`,
    "",
  ].join("\n");
}

export function sitemapXml(extraUrls: SitemapUrl[] = []): string {
  const urls = [
    ...pages
      .filter((page) => page.inSitemap)
      .map((page) => ({
        path: page.path,
        lastmod: page.lastmod,
        images: sitemapImages[page.path],
      })),
    ...extraUrls,
  ]
    .map((entry) => {
      const loc = absoluteUrl(entry.path);
      const images = entry.images ?? [];
      const imageTags = images
        .map(
          (image) => `    <image:image>
      <image:loc>${absoluteUrl(image.loc)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
    </image:image>`,
        )
        .join("\n");
      const lastmod = entry.lastmod ? `\n    <lastmod>${escapeXml(entry.lastmod)}</lastmod>` : "";

      return `  <url>
    <loc>${loc}</loc>${lastmod}${imageTags ? `\n${imageTags}` : ""}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

export function articlePageSeo(post: {
  slug: string;
  metadata: {
    title: string;
    description: string;
    date: string;
    updated?: string;
    author: string;
    category?: string;
    image?: string;
    keywords?: string[];
  };
}): PageSeo {
  const modified = post.metadata.updated ?? post.metadata.date;

  return {
    path: `/blog/${post.slug}`,
    title: `${post.metadata.title} | StowLink`,
    description: post.metadata.description,
    robots: "index, follow",
    inSitemap: true,
    ogType: "article",
    keywords: post.metadata.keywords,
    image: post.metadata.image,
    imageAlt: post.metadata.title,
    publishedTime: post.metadata.date,
    modifiedTime: modified,
    lastmod: modified,
    author: post.metadata.author,
    section: post.metadata.category,
    headline: post.metadata.title,
  };
}

export function rssXml(
  posts: {
    slug: string;
    metadata: { title: string; description: string; date: string };
  }[],
): string {
  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      return `    <item>
      <title>${escapeXml(post.metadata.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(post.metadata.description)}</description>
      <pubDate>${rssDate(post.metadata.date)}</pubDate>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${siteName} Blog`)}</title>
    <link>${escapeXml(absoluteUrl("/blog"))}</link>
    <description>${escapeXml("Tips, workflows, and ideas for keeping the links you care about organized.")}</description>
    <language>en-us</language>
    <atom:link href="${escapeXml(`${canonicalOrigin}/rss.xml`)}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;
}

export function seoHeadHtml(page: PageSeo): string {
  const url = page.path === "/404" ? `${canonicalOrigin}/` : absoluteUrl(page.path);
  const imagePath = page.image ?? ogImagePath;
  const image = absoluteUrl(imagePath);
  const imageAlt = page.imageAlt ?? `${siteName} — ${siteMotto}`;
  const jsonLd = JSON.stringify(jsonLdFor(page));
  const keywords = page.keywords?.length
    ? `\n    <meta name="keywords" content="${escapeAttr(page.keywords.join(", "))}" />`
    : "";
  const articleTimes = page.publishedTime
    ? `\n    <meta property="article:published_time" content="${escapeAttr(page.publishedTime)}" />
    <meta property="article:modified_time" content="${escapeAttr(page.modifiedTime ?? page.publishedTime)}" />`
    : "";
  const rss = `\n    <link rel="alternate" type="application/rss+xml" title="${escapeAttr(`${siteName} Blog`)}" href="${escapeAttr(`${canonicalOrigin}/rss.xml`)}" />`;

  return `    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeAttr(page.description)}" />
    <meta name="robots" content="${escapeAttr(page.robots)}" />
    <meta name="googlebot" content="${escapeAttr(page.robots)}" />${keywords}
    <link rel="canonical" href="${escapeAttr(url)}" />
    <link rel="alternate" hreflang="en" href="${escapeAttr(url)}" />
    <link rel="alternate" hreflang="x-default" href="${escapeAttr(url)}" />${rss}
    <meta property="og:type" content="${page.ogType}" />
    <meta property="og:site_name" content="${escapeAttr(siteName)}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:title" content="${escapeAttr(page.title)}" />
    <meta property="og:description" content="${escapeAttr(page.description)}" />
    <meta property="og:url" content="${escapeAttr(url)}" />
    <meta property="og:image" content="${escapeAttr(image)}" />
    <meta property="og:image:alt" content="${escapeAttr(imageAlt)}" />
    <meta property="og:image:width" content="${ogImageWidth}" />
    <meta property="og:image:height" content="${ogImageHeight}" />
    <meta property="og:image:type" content="${imageMime(imagePath)}" />${articleTimes}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(page.title)}" />
    <meta name="twitter:description" content="${escapeAttr(page.description)}" />
    <meta name="twitter:image" content="${escapeAttr(image)}" />
    <meta name="twitter:image:alt" content="${escapeAttr(imageAlt)}" />
    <script id="json-ld" type="application/ld+json">${jsonLd}</script>`;
}

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function escapeHtml(value: string): string {
  return escapeAttr(value).replace(/>/g, "&gt;");
}

function escapeXml(value: string): string {
  return escapeHtml(value).replace(/'/g, "&apos;");
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

function rssDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toUTCString();
}

export const canonicalOrigin = "https://www.stowlink.app";
export const siteName = "StowLink";
export const siteMotto = "Your links, neatly stowed.";
export const publisherName = "Forgelyte";
export const ogImagePath = "/og-image.png";
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
      "On the old Mac, open Settings → License → Deactivate This Mac. Install StowLink on the new Mac and enter the same key. A license works on one Mac at a time.",
  },
  {
    id: "reinstall",
    question: "Reinstall StowLink",
    answer:
      "If this Mac still has its Keychain, StowLink reuses the existing activation. If the disk was erased, deactivate the old instance first, then activate again.",
  },
] as const;

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  robots: string;
  inSitemap: boolean;
  ogType: "website" | "article";
};

export const pages: PageSeo[] = [
  {
    path: "/",
    title: "StowLink — Native macOS Link Library",
    description:
      "Save, organize, and find every link in one native Mac app. Nested folders, rich previews, Spotlight search, and a one-time purchase.",
    robots: "index, follow",
    inSitemap: true,
    ogType: "website",
  },
  {
    path: "/pricing",
    title: "Pricing — StowLink for macOS",
    description:
      "StowLink is a one-time $39 USD license for one Mac. No subscription. Nested folders, search, previews, notes, and optional iCloud sync.",
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
    path: "/support",
    title: "Support — StowLink",
    description:
      "Help with StowLink licenses, moving to another Mac, and reinstalling. Email support@forgelyte.com with your purchase email.",
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
      "License terms for StowLink. One-time purchase for one Mac, Lemon Squeezy as merchant of record, and what the license includes.",
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
    case "/support":
      return "Support";
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
        price: "39.00",
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
      webPage.breadcrumb = {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: siteName,
            item: `${canonicalOrigin}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: breadcrumbName(page.path),
            item: pageUrl,
          },
        ],
      };
    }

    graph.push(webPage);
  }

  if (page.path === "/support") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonicalOrigin}/support#faq`,
      url: `${canonicalOrigin}/support`,
      mainEntity: supportFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
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

export function sitemapXml(): string {
  const urls = pages
    .filter((page) => page.inSitemap)
    .map((page) => {
      const loc = absoluteUrl(page.path);
      const images = sitemapImages[page.path] ?? [];
      const imageTags = images
        .map(
          (image) => `    <image:image>
      <image:loc>${absoluteUrl(image.loc)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
    </image:image>`,
        )
        .join("\n");

      return `  <url>
    <loc>${loc}</loc>${imageTags ? `\n${imageTags}` : ""}
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

export function seoHeadHtml(page: PageSeo): string {
  const url = page.path === "/404" ? `${canonicalOrigin}/` : absoluteUrl(page.path);
  const image = absoluteUrl(ogImagePath);
  const jsonLd = JSON.stringify(jsonLdFor(page));

  return `    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeAttr(page.description)}" />
    <meta name="robots" content="${escapeAttr(page.robots)}" />
    <meta name="googlebot" content="${escapeAttr(page.robots)}" />
    <link rel="canonical" href="${escapeAttr(url)}" />
    <link rel="alternate" hreflang="en" href="${escapeAttr(url)}" />
    <link rel="alternate" hreflang="x-default" href="${escapeAttr(url)}" />
    <meta property="og:type" content="${page.ogType}" />
    <meta property="og:site_name" content="${escapeAttr(siteName)}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:title" content="${escapeAttr(page.title)}" />
    <meta property="og:description" content="${escapeAttr(page.description)}" />
    <meta property="og:url" content="${escapeAttr(url)}" />
    <meta property="og:image" content="${escapeAttr(image)}" />
    <meta property="og:image:alt" content="${escapeAttr(`${siteName} — ${siteMotto}`)}" />
    <meta property="og:image:width" content="${ogImageWidth}" />
    <meta property="og:image:height" content="${ogImageHeight}" />
    <meta property="og:image:type" content="image/png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(page.title)}" />
    <meta name="twitter:description" content="${escapeAttr(page.description)}" />
    <meta name="twitter:image" content="${escapeAttr(image)}" />
    <meta name="twitter:image:alt" content="${escapeAttr(`${siteName} — ${siteMotto}`)}" />
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

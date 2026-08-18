const checkout = import.meta.env.VITE_LEMONSQUEEZY_CHECKOUT_URL ?? "";

export const site = {
  name: import.meta.env.VITE_APP_NAME ?? "StowLink",
  motto: "Your links, neatly stowed.",
  checkoutUrl: checkout || "/pricing",
  downloadUrl:
    import.meta.env.VITE_APP_DOWNLOAD_URL ??
    "https://github.com/Cratis1831/stowlink-releases/releases/latest/download/StowLink.zip",
  releasesUrl:
    import.meta.env.VITE_RELEASES_URL ??
    "https://github.com/Cratis1831/stowlink-releases/releases",
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL ?? "support@stowlink.app",
  price: import.meta.env.VITE_PRICE_LABEL ?? "$19",
  checkoutConfigured: Boolean(checkout),
};

export const buyProps = site.checkoutConfigured
  ? { href: site.checkoutUrl, target: "_blank", rel: "noreferrer" as const }
  : { href: "/pricing" };

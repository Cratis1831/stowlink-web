const NEW_TEST_CHECKOUT =
  "https://stowlink.lemonsqueezy.com/checkout/buy/9e2ec424-6138-434b-8528-0d8d32e4fe3c";
const STALE_CHECKOUTS = [
  "https://stowlink.lemonsqueezy.com/checkout/buy/1a7042c1-b552-4a01-bb51-b1a4cef2fb02",
];

const fromEnv = import.meta.env.VITE_LEMONSQUEEZY_CHECKOUT_URL ?? "";
const checkout =
  fromEnv && !STALE_CHECKOUTS.includes(fromEnv) ? fromEnv : NEW_TEST_CHECKOUT;

export const site = {
  name: import.meta.env.VITE_APP_NAME ?? "StowLink",
  motto: "Your links, neatly stowed.",
  currency: import.meta.env.VITE_CURRENCY ?? "USD",
  price: import.meta.env.VITE_PRICE_ONETIME ?? "39.00",
  checkoutUrl: checkout,
  downloadUrl:
    import.meta.env.VITE_APP_DOWNLOAD_URL ??
    "https://github.com/Cratis1831/stowlink-releases/releases/latest/download/StowLink.zip",
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL ?? "support@forgelyte.com",
  checkoutConfigured: Boolean(checkout),
};

export function money(amount: string = site.price) {
  return `$${amount} ${site.currency}`;
}

export const buyProps = {
  href: site.checkoutUrl,
  target: "_blank" as const,
  rel: "noreferrer" as const,
};

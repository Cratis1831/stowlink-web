const LIVE_CHECKOUT =
  "https://stowlink.lemonsqueezy.com/checkout/buy/730be063-535c-4409-ad1c-5be672b82f40";
const STALE_CHECKOUTS = [
  "https://stowlink.lemonsqueezy.com/checkout/buy/1a7042c1-b552-4a01-bb51-b1a4cef2fb02",
  "https://stowlink.lemonsqueezy.com/checkout/buy/9e2ec424-6138-434b-8528-0d8d32e4fe3c",
];

const fromEnv = import.meta.env.VITE_LEMONSQUEEZY_CHECKOUT_URL ?? "";
const checkout =
  fromEnv && !STALE_CHECKOUTS.includes(fromEnv) ? fromEnv : LIVE_CHECKOUT;

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
  databuddyClientId:
    import.meta.env.VITE_DATABUDDY_CLIENT_ID ?? "66f68704-e58f-4846-845f-e759b2881f86",
  purchaseFlagKey: import.meta.env.VITE_DATABUDDY_PURCHASE_FLAG ?? "live-products",
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

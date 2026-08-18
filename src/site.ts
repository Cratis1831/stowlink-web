const checkout = import.meta.env.VITE_LEMONSQUEEZY_CHECKOUT_URL ?? "";
const yearlyCheckout =
  import.meta.env.VITE_LEMONSQUEEZY_YEARLY_CHECKOUT_URL ?? checkout;

export const site = {
  name: import.meta.env.VITE_APP_NAME ?? "StowLink",
  motto: "Your links, neatly stowed.",
  currency: import.meta.env.VITE_CURRENCY ?? "USD",
  oneTimePrice: import.meta.env.VITE_PRICE_ONETIME ?? "29.99",
  yearlyPrice: import.meta.env.VITE_PRICE_YEARLY ?? "39.00",
  checkoutUrl: checkout || "/pricing",
  yearlyCheckoutUrl: yearlyCheckout || "/pricing",
  downloadUrl:
    import.meta.env.VITE_APP_DOWNLOAD_URL ??
    "https://github.com/Cratis1831/stowlink-releases/releases/latest/download/StowLink.zip",
  releasesUrl:
    import.meta.env.VITE_RELEASES_URL ??
    "https://github.com/Cratis1831/stowlink-releases/releases",
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL ?? "support@stowlink.app",
  checkoutConfigured: Boolean(checkout),
};

export function money(amount: string) {
  return `$${amount} ${site.currency}`;
}

function checkoutProps(url: string) {
  return site.checkoutConfigured
    ? { href: url, target: "_blank" as const, rel: "noreferrer" as const }
    : { href: "/pricing" };
}

export const buyProps = checkoutProps(site.checkoutUrl);
export const yearlyBuyProps = checkoutProps(site.yearlyCheckoutUrl);

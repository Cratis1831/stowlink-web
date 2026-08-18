import { buyProps, site } from "../site";

export default function Pricing() {
  return (
    <section className="narrow">
      <p className="eyebrow">Simple on purpose</p>
      <h1>One purchase. Two Macs.</h1>
      <p className="lede">
        StowLink is a one-time license. You get the current app, subsequent Sparkle updates, and
        email support. Lemon Squeezy handles checkout, tax, and the receipt.
      </p>

      <article className="price-card">
        <div>
          <h2>{site.name}</h2>
          <p>Native macOS link library</p>
        </div>
        <p className="price">{site.price}</p>
        <ul>
          <li>Perpetual license, no subscription</li>
          <li>Activate on two Macs</li>
          <li>Notarized download and signed in-app updates</li>
          <li>Optional iCloud sync, local storage by default</li>
          <li>Email support from {site.supportEmail}</li>
        </ul>
        <a className="button primary" {...buyProps}>
          {site.checkoutConfigured ? "Buy with Lemon Squeezy" : "Checkout URL not configured yet"}
        </a>
        {!site.checkoutConfigured && (
          <p className="fine">
            Set <code>VITE_LEMONSQUEEZY_CHECKOUT_URL</code> in Netlify after the Test product exists.
          </p>
        )}
      </article>
    </section>
  );
}

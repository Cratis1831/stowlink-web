import { buyProps, money, site, yearlyBuyProps } from "../site";

export default function Pricing() {
  return (
    <section className="narrow">
      <p className="eyebrow">Simple on purpose</p>
      <h1>Two ways to buy. Two Macs.</h1>
      <p className="lede">
        Prices are in US dollars ({site.currency}). You get the current app, subsequent Sparkle
        updates, and email support. Lemon Squeezy handles checkout, tax, and the receipt.
      </p>

      <div className="price-grid">
        <article className="price-card featured">
          <div>
            <h2>One-time</h2>
            <p>Perpetual license</p>
          </div>
          <p className="price">
            ${site.oneTimePrice}
            <span> {site.currency}</span>
          </p>
          <ul>
            <li>Pay once, keep using StowLink</li>
            <li>Activate on two Macs</li>
            <li>Notarized download and signed in-app updates</li>
            <li>Optional iCloud sync, local storage by default</li>
            <li>Email support from {site.supportEmail}</li>
          </ul>
          <a className="button primary" {...buyProps}>
            {site.checkoutConfigured ? `Buy ${money(site.oneTimePrice)}` : "Checkout URL not configured yet"}
          </a>
        </article>

        <article className="price-card">
          <div>
            <h2>Yearly</h2>
            <p>Billed once a year</p>
          </div>
          <p className="price">
            ${site.yearlyPrice}
            <span> {site.currency}</span>
            <small>/ year</small>
          </p>
          <ul>
            <li>Same app, same two-Mac limit</li>
            <li>Renews yearly through Lemon Squeezy</li>
            <li>Notarized download and signed in-app updates</li>
            <li>Optional iCloud sync, local storage by default</li>
            <li>Email support from {site.supportEmail}</li>
          </ul>
          <a className="button" {...yearlyBuyProps}>
            {site.checkoutConfigured ? `Buy ${money(site.yearlyPrice)} / year` : "Checkout URL not configured yet"}
          </a>
        </article>
      </div>

      {!site.checkoutConfigured && (
        <p className="fine">
          Set <code>VITE_LEMONSQUEEZY_CHECKOUT_URL</code> in Netlify after the Test product exists.
        </p>
      )}
    </section>
  );
}

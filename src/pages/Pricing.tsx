import { buyProps, money, site } from "../site";

export default function Pricing() {
  return (
    <section className="narrow">
      <p className="eyebrow">Simple on purpose</p>
      <h1>One purchase. One Mac.</h1>
      <p className="lede">
        Prices are in US dollars ({site.currency}). StowLink is a one-time license. You get the
        current app, subsequent Sparkle updates, and email support. Lemon Squeezy handles
        checkout, tax, and the receipt.
      </p>

      <article className="price-card featured">
        <div>
          <h2>{site.name}</h2>
          <p>Native macOS link library</p>
        </div>
        <p className="price">
          ${site.price}
          <span> {site.currency}</span>
        </p>
        <ul>
          <li>Perpetual license, no subscription</li>
          <li>Activate on one Mac at a time</li>
          <li>Notarized download and signed in-app updates</li>
          <li>Optional iCloud sync, local storage by default</li>
          <li>Email support from {site.supportEmail}</li>
        </ul>
        <a className="button primary" {...buyProps}>
          Buy {money()}
        </a>
      </article>
    </section>
  );
}

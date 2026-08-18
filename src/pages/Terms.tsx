import LegalBackLink from "@/components/LegalBackLink";
import { site } from "../site";

export default function Terms() {
  return (
    <article className="prose">
      <LegalBackLink />
      <h1>Terms of use</h1>
      <p>Last updated August 18, 2026.</p>
      <p>
        By buying or using {site.name}, you agree to these terms. The app is licensed, not sold,
        for use on macOS 14 or later.
      </p>
      <h2>License</h2>
      <p>
        A purchase grants a perpetual, non-exclusive license to install {site.name} on up to two
        Macs you own or control. You may deactivate either Mac to move an activation. The license
        is for you or your organization and is not a subscription.
      </p>
      <h2>What you get</h2>
      <p>
        The current version, subsequent Sparkle updates we publish, and email support. Features
        can change. CloudKit, Apple, Cloudflare, and Lemon Squeezy remain under their own
        terms.
      </p>
      <h2>Restrictions</h2>
      <p>
        Do not redistribute the app, share a key beyond the two-Mac limit, or remove licensing,
        signing, or update checks. Reverse engineering is allowed only where the law requires it.
      </p>
      <h2>Payments</h2>
      <p>
        Lemon Squeezy is the merchant of record and collects applicable sales tax or VAT. Your
        checkout contract with Lemon Squeezy applies to payment, invoices, and chargebacks.
      </p>
      <h2>Disclaimer</h2>
      <p>
        {site.name} is provided “as is”. We are not liable for lost links, lost profits, or
        damages beyond the amount you paid for the license, except where the law says otherwise.
      </p>
      <h2>Contact</h2>
      <p>
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
      </p>
    </article>
  );
}

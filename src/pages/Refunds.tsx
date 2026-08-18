import LegalBackLink from "@/components/LegalBackLink";
import { site } from "../site";

export default function Refunds() {
  return (
    <article className="prose refund-policy">
      <LegalBackLink />
      <h1>Refund policy</h1>
      <p>Last updated August 18, 2026.</p>
      <p>
        {site.name} is a paid macOS license. If the app does not launch on a supported Mac,
        or a defect blocks licensed use, email{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> within 14 days of purchase
        with the order email. We will refund through Lemon Squeezy after we look at the report.
      </p>
      <p>
        Change-of-mind refunds are considered case by case. After a refund we inspect the license
        and disable the key when the refund is meant to end access. A refunded key should stop
        working the next time the app can reach the license service.
      </p>
      <p>
        Chargebacks are handled by Lemon Squeezy. If you need the key disabled on a stolen Mac,
        contact support with the purchase email; do not send the full key in a ticket unless asked.
      </p>
    </article>
  );
}

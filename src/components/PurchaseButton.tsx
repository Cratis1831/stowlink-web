import { useFlag } from "@databuddy/sdk/react";
import { buyProps, site } from "../site";

export default function PurchaseButton() {
  const { on, loading } = useFlag(site.purchaseFlagKey);

  if (loading) {
    return (
      <span className="button primary" aria-busy="true" aria-disabled="true">
        Purchase
      </span>
    );
  }

  if (!on) {
    return (
      <span className="button primary" aria-disabled="true">
        Coming soon
      </span>
    );
  }

  return (
    <a className="button primary" {...buyProps}>
      Purchase
    </a>
  );
}

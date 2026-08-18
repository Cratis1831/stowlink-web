import { site } from "../site";

const steps = [
  "Download the ZIP from the button below. It always points at the latest notarized build.",
  "Unzip StowLink.app.",
  "Drag StowLink into Applications.",
  "Open StowLink normally from Applications or Launchpad.",
  "Paste the license key from your Lemon Squeezy receipt and choose Activate License.",
];

export default function Download() {
  return (
    <section className="narrow">
      <p className="eyebrow">macOS 14+</p>
      <h1>Download StowLink</h1>
      <p className="lede">
        The app is signed with Developer ID, notarized by Apple, and updated in-app with Sparkle.
        Universal ZIP for Apple silicon and Intel.
      </p>
      <div className="actions">
        <a className="button primary" href={site.downloadUrl}>
          Download StowLink.zip
        </a>
        <a className="button" href={site.releasesUrl} target="_blank" rel="noreferrer">
          All releases
        </a>
      </div>
      <ol className="steps">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p className="fine">
        If macOS asks, open the app from Applications. StowLink is notarized; you should not need
        to change Gatekeeper settings.
      </p>
    </section>
  );
}

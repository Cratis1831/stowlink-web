import { site } from "../site";

export default function Privacy() {
  return (
    <article className="prose">
      <h1>Privacy policy</h1>
      <p>Last updated August 18, 2026.</p>
      <p>
        StowLink is a native macOS app. Your saved links, folders, notes, and preview cache stay
        on your Mac unless you turn on iCloud sync in Settings.
      </p>
      <h2>What the app stores locally</h2>
      <p>
        URLs, titles, descriptions, notes, folder names, and cached preview images. The license
        key, instance ID, and last successful validation time are stored in the macOS Keychain on
        this device only. They are not synced with iCloud.
      </p>
      <h2>Optional iCloud</h2>
      <p>
        If you enable iCloud, library data uses your Apple Account and Apple’s CloudKit. We do
        not operate a separate cloud database for your links.
      </p>
      <h2>Licensing and payments</h2>
      <p>
        Checkout is processed by Lemon Squeezy as merchant of record. The app sends your license
        key and a generated instance name to Lemon Squeezy’s License API to activate, validate, or
        deactivate. It does not send an account API key, and it does not put license keys in URLs,
        logs, or analytics.
      </p>
      <h2>Updates</h2>
      <p>
        Sparkle checks a public HTTPS appcast for a newer notarized build. That request does not
        include your license key.
      </p>
      <h2>This website</h2>
      <p>
        The product site is static. We do not run accounts, analytics pixels, or a custom
        database on it. Hosting is provided by Netlify. Downloads are served from GitHub Releases.
      </p>
      <h2>Contact</h2>
      <p>
        Questions: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
      </p>
    </article>
  );
}

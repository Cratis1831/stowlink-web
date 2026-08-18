import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../site";

const LATEST_RELEASE_API =
  "https://api.github.com/repos/Cratis1831/stowlink-releases/releases/latest";

export default function Download() {
  const [status, setStatus] = useState<"checking" | "ready" | "unavailable">("checking");

  useEffect(() => {
    let cancelled = false;

    fetch(LATEST_RELEASE_API)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No public release yet");
        }
        return response.json() as Promise<{
          assets?: { name?: string }[];
        }>;
      })
      .then((payload) => {
        const hasZip = payload.assets?.some((asset) => asset.name === "StowLink.zip");
        if (!hasZip) {
          throw new Error("No StowLink.zip asset");
        }
        if (!cancelled) {
          setStatus("ready");
          window.location.replace(site.downloadUrl);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("unavailable");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "unavailable") {
    return (
      <section className="narrow">
        <h1>Download is not public yet</h1>
        <p className="lede">
          The notarized macOS app will appear here after the first release. Pricing, support, and
          legal pages are already live.
        </p>
        <p>
          <Link to="/pricing">See pricing</Link>
        </p>
      </section>
    );
  }

  return (
    <section className="narrow">
      <h1>Starting download</h1>
      <p className="lede">
        If it does not start, <a href={site.downloadUrl}>download StowLink</a>.
      </p>
    </section>
  );
}

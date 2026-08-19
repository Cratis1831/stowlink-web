import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
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

  useEffect(() => {
    if (status !== "ready") {
      return;
    }

    const link = document.createElement("a");
    link.href = site.downloadUrl;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, [status]);

  if (status === "unavailable") {
    return (
      <section className="narrow">
        <p className="eyebrow">macOS 14+</p>
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
      <p className="eyebrow">macOS 14+</p>
      <h1>Download StowLink</h1>
      <p className="lede">
        Get the native Mac app for saving, organizing, and finding links. One-time purchase, no
        account required.
      </p>
      {status === "ready" ? (
        <p>
          <a className={buttonVariants({ size: "lg" })} href={site.downloadUrl} rel="noopener noreferrer">
            Download StowLink.zip
          </a>
        </p>
      ) : (
        <p className="lede">Checking for the latest public build…</p>
      )}
      <p>
        If the download does not start,{" "}
        <a href={site.downloadUrl} rel="noopener noreferrer">
          save StowLink.zip
        </a>{" "}
        or <Link to="/pricing">buy a license</Link>.
      </p>
    </section>
  );
}

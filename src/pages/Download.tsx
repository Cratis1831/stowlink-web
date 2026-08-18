import { useEffect } from "react";
import { site } from "../site";

export default function Download() {
  useEffect(() => {
    window.location.replace(site.downloadUrl);
  }, []);

  return (
    <section className="narrow">
      <h1>Starting download</h1>
      <p className="lede">If it does not start, <a href={site.downloadUrl}>download StowLink</a>.</p>
    </section>
  );
}

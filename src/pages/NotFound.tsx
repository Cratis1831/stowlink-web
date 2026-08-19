import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="narrow">
      <p className="eyebrow">404</p>
      <h1>This page is not here.</h1>
      <p className="lede">
        That URL is not a StowLink page. The product, pricing, download, and support pages are
        still available.
      </p>
      <p>
        <Link to="/">Back to StowLink</Link>
      </p>
    </section>
  );
}

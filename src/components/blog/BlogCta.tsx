import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

export default function BlogCta() {
  return (
    <aside className="blog-cta">
      <h2>Keep your links organized</h2>
      <p>
        StowLink gives you a simple, native place on your Mac to save and organize the links you
        want to keep.
      </p>
      <Link to="/pricing" className={buttonVariants({ className: "cta-button" })}>
        Get StowLink
        <ArrowRight data-icon="inline-end" aria-hidden="true" />
      </Link>
    </aside>
  );
}

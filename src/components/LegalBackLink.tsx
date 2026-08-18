import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

export default function LegalBackLink() {
  return (
    <Link
      to="/"
      className={buttonVariants({ variant: "ghost", size: "sm", className: "legal-back" })}
    >
      <ArrowLeft data-icon="inline-start" aria-hidden="true" />
      Back to home
    </Link>
  );
}

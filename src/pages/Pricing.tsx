import { FlagsProvider } from "@databuddy/sdk/react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PurchaseButton from "@/components/PurchaseButton";
import { pricingFaqs } from "../seo";
import { site } from "../site";

const includedFeatures = [
  "Save links with a global keyboard shortcut",
  "Organize with nested folders",
  "Search by title, URL, domain, or folder",
  "See rich previews with images and video",
  "Add formatted notes to any link",
  "Store locally or sync with iCloud",
];

export default function Pricing() {
  return (
    <FlagsProvider
      clientId={site.databuddyClientId}
      defaults={{ [site.purchaseFlagKey]: true }}
    >
    <section className="narrow pricing-page">
      <p className="eyebrow">Simple on purpose</p>
      <h1>One purchase. Two Macs.</h1>
      <p className="lede">
        StowLink is a one-time license for up to two Macs. Deactivate a Mac to move that slot. No
        subscription.
      </p>

      <article className="price-card featured">
        <div>
          <h2>{site.name}</h2>
          <p>Native macOS link library</p>
        </div>
        <p className="price">
          ${site.price}
          <span> {site.currency}</span>
        </p>
        <div className="pricing-features">
          <div className="pricing-features-heading">
            <h3>Features</h3>
            <span aria-hidden="true" />
          </div>
          <ul>
            {includedFeatures.map((feature) => (
              <li key={feature}>
                <Check aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <PurchaseButton />
        <p>
          Already licensed? <Link to="/download">Download StowLink for macOS</Link>
        </p>
      </article>

      <h2 className="pricing-faq-title">Questions</h2>
      <Accordion className="support-accordion pricing-faq">
        {pricingFaqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
    </FlagsProvider>
  );
}

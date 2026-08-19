import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { supportFaqs } from "../seo";
import { site } from "../site";

export default function Support() {
  return (
    <section className="narrow support-page">
      <p className="eyebrow">Help</p>
      <h1>Support</h1>
      <p className="lede">
        Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. Include your
        purchase email and a short description. Do not send the full license key unless asked;
        a masked key is enough.
      </p>
      <Accordion className="support-accordion">
        {supportFaqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.id === "find-license" ? (
                <p>
                  Open{" "}
                  <a href="https://app.lemonsqueezy.com/my-orders" target="_blank" rel="noreferrer">
                    Lemon Squeezy My Orders
                  </a>{" "}
                  with the email you used at checkout. The receipt also contains the key.
                </p>
              ) : (
                <p>{faq.answer}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

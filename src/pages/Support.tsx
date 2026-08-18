import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
        <AccordionItem value="find-license">
          <AccordionTrigger>Find my license</AccordionTrigger>
          <AccordionContent>
            <p>
              Open{" "}
              <a href="https://app.lemonsqueezy.com/my-orders" target="_blank" rel="noreferrer">
                Lemon Squeezy My Orders
              </a>{" "}
              with the email you used at checkout. The receipt also contains the key.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="move-mac">
          <AccordionTrigger>Move to another Mac</AccordionTrigger>
          <AccordionContent>
            <p>
              On the old Mac, open Settings → License → Deactivate This Mac. Install StowLink on
              the new Mac and enter the same key. A license works on one Mac at a time.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="reinstall">
          <AccordionTrigger>Reinstall StowLink</AccordionTrigger>
          <AccordionContent>
            <p>
              If this Mac still has its Keychain, StowLink reuses the existing activation. If the
              disk was erased, deactivate the old instance first, then activate again.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

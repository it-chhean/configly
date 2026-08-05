import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import { FaqItem, faqItems } from "@/data/faq1";
import { cn } from "@/lib/utils";

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
  className?: string;
}

const FAQSection = ({items = faqItems,className,}: Faq1Props) => {
  return (
    <section className={cn("mb-20", className)}>
      <div className="container">
        <div>
         <div className="mb-8">
            <h3 className="text-lg font-medium">
               Why Choose EnterPurpose Config Converter?
            </h3>
            <p className="mt-2 text-sm text-muted">
               Convert configuration files between popular formats with fast, secure, browser-based processing. No uploads, no servers, no data leaves your device.
            </p>
         </div>
          <Accordion type="single" collapsible>
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className=" font-medium hover:underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "How does the service fee work?",
    answer:
      "Service fees are applied per transaction depending on your selected plan. Basic users pay 5% while Business Plus users pay 10%.",
  },
  {
    id: "item-2",
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes. You can switch plans at any time without penalties. Changes apply immediately for future transactions.",
  },
  {
    id: "item-3",
    question: "Do freelancers need to pay to join?",
    answer:
      "No. Freelancers can join completely free. Optional paid tools and boosts may be available inside the platform.",
  },
  {
    id: "item-4",
    question: "Is payment secure?",
    answer:
      "All payments are processed through encrypted, PCI-compliant payment gateways. Your data and funds remain fully protected.",
  },
];

const FAQSection = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-3"
      defaultValue="item-1"
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={faq.id}
          className="border border-neutral-200 dark:border-neutral-700  rounded-xl px-4 last:border"
        >
          <AccordionTrigger className="text-lg font-medium hover:no-underline">
            {faq.question}
          </AccordionTrigger>

          <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4 ">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQSection;

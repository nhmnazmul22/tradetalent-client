import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constant";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import { motion } from "motion/react";

const FAQSection = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
    >
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-3"
        defaultValue="item-1"
      >
        {faqs.map((faq) => (
          <motion.div variants={fadeInUp} key={faq.id}>
            <AccordionItem
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
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default FAQSection;

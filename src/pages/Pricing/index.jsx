import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import FAQSection from "@/components/FAQ/Faq";
import Pricing from "@/components/Pricing/Pricing";
import PricingPlans from "@/components/Pricing/PricingPlanes";
import React from "react";

const PricingPage = () => {
  return (
    <>
      <Section className="relative bg-[url(/images/hero-bg.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-linear-to-b from-neutral-900/70 to-neutral-900/40 z-10"></div>

        <div className="main-container relative z-20">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-5xl font-bold text-white">Pricing Plans</h1>
            <p className="text-gray-200 max-w-2xl text-center">
              Choose the perfect plan for freelancers, employers, and project
              managers.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="main-container">
          <Pricing></Pricing>
        </div>
      </Section>

      <Section className="pt-10 bg-white dark:bg-neutral-900">
        <div className="main-container">
          <SectionHeading
            title="Key Features"
            subtitle="Compare plans and choose what’s right for your business"
          ></SectionHeading>

          <div className="mt-10">
            <PricingPlans></PricingPlans>
          </div>
        </div>
      </Section>

      <Section className=" bg-neutral-50 dark:bg-neutral-950">
        <div className="main-container max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Everything you need to know about our pricing plans.
            </p>
          </div>

          <div className="mt-5 ">
            <FAQSection />
          </div>
        </div>
      </Section>
    </>
  );
};

export default PricingPage;

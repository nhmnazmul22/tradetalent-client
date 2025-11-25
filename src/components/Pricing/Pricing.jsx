import React from "react";
import PricingCard from "./PricingCard";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
} from "@/lib/motionVariants";
import { motion } from "motion/react";

const Pricing = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <motion.div variants={fadeInLeft}>
        <PricingCard
          title="Starter"
          price="0"
          subtitle="Perfect for new freelancers"
          features={[
            "1 active service",
            "Basic profile listing",
            "Community support",
            "Limited messaging",
          ]}
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <PricingCard
          title="Professional"
          price="19"
          subtitle="Best for active freelancers"
          highlighted={true}
          features={[
            "Unlimited services.js",
            "Priority ranking",
            "Advanced analytics",
            "Unlimited messaging",
            "Profile badge",
          ]}
        />
      </motion.div>

      <motion.div variants={fadeInRight}>
        <PricingCard
          title="Business"
          price="49"
          subtitle="For agencies & teams"
          features={[
            "Team management tools",
            "Dedicated account manager",
            "Advanced performance insights",
            "Priority support",
            "Custom branding",
          ]}
        />
      </motion.div>
    </motion.div>
  );
};

export default Pricing;

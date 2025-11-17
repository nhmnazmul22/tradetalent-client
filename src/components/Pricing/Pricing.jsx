import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <PricingCard
        title="Professional"
        price="19"
        subtitle="Best for active freelancers"
        highlighted={true}
        features={[
          "Unlimited services",
          "Priority ranking",
          "Advanced analytics",
          "Unlimited messaging",
          "Profile badge",
        ]}
      />

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
    </div>
  );
};

export default Pricing;

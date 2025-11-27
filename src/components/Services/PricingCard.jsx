import React from "react";
import InputBox from "@/components/common/InputBox";
import { Label } from "@/components/ui/label";

const PricingCard = ({ title, prefix }) => {
  return (
    <div className="border border-neutral-300 rounded-lg p-4 shadow-sm bg-white dark:bg-neutral-900">
      <h3 className="font-medium text-lg mb-3">{title}</h3>

      <InputBox
        label="Title"
        name={`${prefix}Title`}
        placeholder="Starter Website"
        isRequired
      />

      <Label className="mt-3 mb-1 block">Description</Label>
      <textarea
        name={`${prefix}Description`}
        className="w-full p-2 border border-neutral-200 rounded-md min-h-20"
        placeholder="Package description"
      />

      <InputBox
        label="Price (USD)"
        name={`${prefix}Price`}
        type="number"
        placeholder="100"
        isRequired
      />
      <InputBox
        label="Delivery Days"
        name={`${prefix}Delivery`}
        type="number"
        placeholder="2"
        isRequired
      />
      <InputBox
        label="Revisions"
        name={`${prefix}Revisions`}
        type="number"
        placeholder="1"
      />

      {/* Pages */}
      <InputBox
        label="Included Pages"
        name={`${prefix}Pages`}
        placeholder="1"
      />

      {/* Support */}
      <InputBox
        label="Support Days"
        name={`${prefix}Support`}
        placeholder="7"
      />

      {/* Features */}
      <Label className="mt-3 mb-1 block">Features (comma separated)</Label>
      <textarea
        name={`${prefix}Features`}
        className="w-full p-2 border border-neutral-200 rounded-md min-h-[60px]"
        placeholder="Mobile responsive, SEO optimized..."
      />
    </div>
  );
};

export default PricingCard;

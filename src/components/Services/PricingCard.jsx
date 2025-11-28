import React from "react";
import InputBox from "@/components/common/InputBox";
import {Label} from "@/components/ui/label";

const PricingCard = ({tier, pricing, handleChange}) => {
    return (
        <div className="border border-neutral-300 rounded-lg p-4 shadow-sm bg-white dark:bg-neutral-900">
            <h3 className="font-medium text-lg mb-3 capitalize">{tier} Package</h3>

            <InputBox
                label="Title"
                name={`${tier}Title`}
                value={pricing.title}
                onChange={e => handleChange(tier, "title", e.target.value)}
                isRequired
                placeholder="Starter Website"/>

            <Label className="mt-3">Description</Label>
            <textarea
                name={`${tier}Description`}
                value={pricing.description}
                onChange={e => handleChange(tier, "description", e.target.value)}
                placeholder="Package description"
                className="w-full p-2 border border-neutral-200 rounded-md min-h-[60px]"
            />

            <InputBox
                label="Price (USD)"
                name={`${tier}Price`}
                type="number"
                value={pricing.price}
                onChange={e => handleChange(tier, "price", e.target.value)}
                isRequired
                placeholder="100"/>

            <InputBox
                label="Delivery Days"
                name={`${tier}Delivery`}
                type="number"
                value={pricing.deliveryDays}
                onChange={e => handleChange(tier, "deliveryDays", e.target.value)}
                isRequired
                placeholder="2"/>

            <InputBox
                label="Revisions"
                name={`${tier}Revisions`}
                type="number"
                value={pricing.revisions}
                onChange={e => handleChange(tier, "revisions", e.target.value)}
                placeholder="1"/>

            <InputBox
                label="Included Pages"
                name={`${tier}Pages`}
                value={pricing.includedPages}
                onChange={e => handleChange(tier, "includedPages", e.target.value)}
                placeholder="1"/>

            <InputBox
                label="Support Days"
                name={`${tier}Support`}
                value={pricing.supportDays}
                onChange={e => handleChange(tier, "supportDays", e.target.value)}
                placeholder="7"/>

            <Label className="mt-3">Features (comma separated)</Label>
            <textarea
                name={`${tier}Features`}
                value={pricing.features}
                onChange={e => handleChange(tier, "features", e.target.value)}
                placeholder="Mobile responsive, SEO optimized..."
                className="w-full p-2 border border-neutral-200 rounded-md min-h-[60px]"
            />
        </div>
    );
};

export default PricingCard;

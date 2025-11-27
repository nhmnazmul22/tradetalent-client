import React from "react";
import { Separator } from "@/components/ui/separator";
import InputBox from "@/components/common/InputBox";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

import ServicePricingSection from "@/components/Services/ServicePricingSection";
import Button from "../common/Button";

const CreateServiceForm = ({ handleSubmit, loading }) => {
  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={staggerContainer}
      initial="start"
      animate="end"
      className="max-w-3xl mx-auto flex flex-col gap-8"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 text-center"
      >
        Create New Service
      </motion.h2>

      {/* Service Basic Info */}
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <InputBox
          label="Service Title"
          name="title"
          placeholder="Build Modern Website"
          isRequired
        />
        <InputBox
          label="Category"
          name="category"
          placeholder="Web Development"
          isRequired
        />
        <InputBox
          label="Starting Price (USD)"
          name="startingPrice"
          type="number"
          placeholder="100"
          isRequired
        />
        <InputBox
          label="Default Delivery Days"
          name="deliveryDays"
          type="number"
          placeholder="2"
          isRequired
        />

        <div className="md:col-span-2">
          <InputBox
            label="Cover Image URL"
            name="images"
            placeholder="https://cdn.com/image.png"
          />
        </div>

        <div className="md:col-span-2">
          <Label className="mb-2 text-base">Description</Label>
          <textarea
            name="description"
            className="w-full p-3 border border-neutral-200 rounded-md min-h-[120px]"
            placeholder="Write strong SEO-friendly service description..."
          />
        </div>
      </motion.div>

      <Separator />

      {/* Pricing Packages */}
      <ServicePricingSection />

      {/* Submit */}
      <motion.div variants={fadeInUp} className="text-center">
        <Button type="submit" className="mt-4">
          {loading ? <Spinner /> : "Create Service"}
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default CreateServiceForm;

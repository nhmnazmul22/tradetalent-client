"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PricingCard from "./PricingCard";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motionVariants";

const ServicePricingSection = () => {
  return (
    <motion.div variants={fadeInUp} className="w-full">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid grid-cols-3 w-full mb-4">
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="standard">Standard</TabsTrigger>
          <TabsTrigger value="premium">Premium</TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          <PricingCard title="Basic Package" prefix="basic" />
        </TabsContent>

        <TabsContent value="standard">
          <PricingCard title="Standard Package" prefix="standard" />
        </TabsContent>
        <TabsContent value="premium">
          <PricingCard title="Premium Package" prefix="premium" />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default ServicePricingSection;

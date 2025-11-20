import React from "react";
import PricingBox from "./PricingBox";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

const RightSide = ({ service }) => {
  return (
    <motion.aside
      variants={staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="bg-white dark:bg-neutral-900 shadow dark:shadow-neutral-800 rounded-lg p-6">
        {/* Top Section */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-between"
        >
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Starting at
            </div>
            <div className="text-3xl font-bold mt-1 dark:text-white">
              ${service.pricing.basic.price}
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Delivery
            </div>
            <div className="font-medium dark:text-gray-200">
              {service.pricing.basic.deliveryDays} days
            </div>
          </div>
        </motion.div>

        {/* Pricing Boxes */}
        <div className="mt-6 grid md:grid-cols-3 gap-3 lg:grid-cols-1">
          <motion.div variants={fadeInUp}>
            <PricingBox pricing={service.pricing.basic} />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <PricingBox
              pricing={service.pricing.standard}
              className="bg-blue-50! dark:bg-blue-900/20!"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <PricingBox pricing={service.pricing.premium} />
          </motion.div>
        </div>
      </div>
    </motion.aside>
  );
};

export default RightSide;

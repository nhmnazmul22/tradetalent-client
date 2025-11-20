import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
const Services = ({ className }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-y-5 sm:gap-5 items-center max-w-7xl mx-auto ${className}`}
    >
      <motion.div variants={fadeInUp}>
        <ServiceCard></ServiceCard>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <ServiceCard></ServiceCard>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <ServiceCard></ServiceCard>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <ServiceCard></ServiceCard>
      </motion.div>
    </motion.div>
  );
};

export default Services;

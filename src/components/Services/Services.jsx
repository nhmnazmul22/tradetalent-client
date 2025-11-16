import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motionVariants";
const Services = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className="grid lg:grid-cols-2 gap-y-5 sm:gap-5 items-center max-w-7xl mx-auto"
    >
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
    </motion.div>
  );
};

export default Services;

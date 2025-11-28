import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
const Services = ({ services, className }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-y-5 sm:gap-5 items-center max-w-7xl mx-auto ${className}`}
    >
        {services && services.length > 0 ? services.map((service) => (
            <motion.div key={service._id} variants={fadeInUp}>
                <ServiceCard service={service}></ServiceCard>
            </motion.div>
        )): <p>No services available.</p>}
    </motion.div>
  );
};

export default Services;

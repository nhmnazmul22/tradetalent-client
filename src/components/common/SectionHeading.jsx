import React from "react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import { motion } from "motion/react";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      animate="end"
      className="flex flex-col justify-start gap-4 text-center max-w-[700px] w-full mx-auto"
    >
      <motion.h3
        variants={fadeInUp}
        initial="start"
        whileInView="end"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-semibold"
      >
        {title}
      </motion.h3>
      <motion.p
        variants={fadeInUp}
        initial="start"
        whileInView="end"
        viewport={{ once: true }}
        className="text-base sm:text-lg italic text-gray-600 dark:text-gray-300"
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default SectionHeading;

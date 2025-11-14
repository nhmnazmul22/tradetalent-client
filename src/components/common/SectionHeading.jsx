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
        className="text-4xl sm:text-5xl font-bold"
      >
        {title}
      </motion.h3>
      <motion.div
        variants={fadeInUp}
        initial="start"
        whileInView="end"
        viewport={{ once: true }}
        className="h-1 rounded-lg bg-linear-to-r from-blue-500 to-blue-400 mx-auto w-[200px]"
      ></motion.div>
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

import React from "react";
import SellersCart from "./SellersCart";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

const Sellers = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      animate="end"
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto"
    >
      <motion.div variants={fadeInUp}>
        <SellersCart></SellersCart>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <SellersCart></SellersCart>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <SellersCart></SellersCart>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <SellersCart></SellersCart>
      </motion.div>
    </motion.div>
  );
};

export default Sellers;

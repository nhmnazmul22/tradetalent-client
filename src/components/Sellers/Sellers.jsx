import React from "react";
import SellersCart from "./SellersCart";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

const Sellers = ({sellers}) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto"
    >
        {sellers && sellers.length > 0 && sellers.map((seller)=>(
            <motion.div variants={fadeInUp}>
                <SellersCart seller={seller}></SellersCart>
            </motion.div>
        ))}
    </motion.div>
  );
};

export default Sellers;

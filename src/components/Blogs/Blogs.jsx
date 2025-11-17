import React from "react";
import BlogCard from "./BlogCard";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import { motion } from "motion/react";

const Blogs = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      <motion.div variants={fadeInUp}>
        <BlogCard></BlogCard>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <BlogCard></BlogCard>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <BlogCard></BlogCard>
      </motion.div>
    </motion.div>
  );
};

export default Blogs;

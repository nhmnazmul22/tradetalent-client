// src/pages/UnderConstruction.jsx
import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import { Hammer, ArrowLeft } from "lucide-react";
import Button from "@/components/common/Button";

const UnderConstruction = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      animate="end"
      className="min-h-screen flex flex-col items-center justify-center text-center p-6
      bg-gray-50 dark:bg-neutral-900"
    >
      {/* Icon */}
      <motion.div variants={fadeInUp}>
        <Hammer size={80} className="text-blue-600" />
      </motion.div>

      <motion.h1
        variants={fadeInUp}
        className="text-5xl sm:text-6xl font-extrabold text-blue-600 mt-4"
      >
        Coming Soon
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="text-gray-600 dark:text-gray-300 max-w-md mt-4 leading-relaxed"
      >
        This page is currently under construction. We’re building something
        awesome for you.
      </motion.p>
      <motion.div variants={fadeInUp}>
        <Link to="/">
          <Button
            className="mt-6 flex items-center gap-2 text-sm
          font-medium px-5 py-3"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default UnderConstruction;

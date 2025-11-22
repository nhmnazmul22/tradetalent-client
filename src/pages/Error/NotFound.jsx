// src/pages/404.jsx
import React from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import Button from "@/components/common/Button";

const NotFoundPage = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      animate="end"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-neutral-900 p-6"
    >
      <motion.h1
        variants={fadeInUp}
        className="text-8xl font-bold text-blue-600"
      >
        404
      </motion.h1>

      <motion.h2
        variants={fadeInUp}
        className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mt-4"
      >
        Page Not Found
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        className="text-gray-500 dark:text-gray-400 mt-2 max-w-md"
      >
        The page you’re looking for doesn’t exist or may have been removed.
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

export default NotFoundPage;

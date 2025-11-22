// src/pages/ErrorPage.jsx
import React from "react";
import { useRouteError, Link } from "react-router";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import Button from "@/components/common/Button";

const ErrorPage = () => {
  const error = useRouteError();

  // Extract
  const status = error?.status || 500;
  const message =
    error?.statusText ||
    error?.data ||
    error?.message ||
    "Unexpected error occurred.";

  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      animate="end"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-neutral-900  p-6"
    >
      <motion.div variants={fadeInUp}>
        <AlertCircle size={80} className="text-blue-600" />
      </motion.div>
      <motion.h1
        variants={fadeInUp}
        className="text-6xl sm:text-7xl font-extrabold text-blue-600 mt-4"
      >
        {status}
      </motion.h1>
      <motion.h2
        variants={fadeInUp}
        className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mt-4"
      >
        {status === 404 ? "Page Not Found" : "Something Went Wrong"}
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="text-gray-500 dark:text-gray-400 mt-2 max-w-md"
      >
        {message}
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

export default ErrorPage;

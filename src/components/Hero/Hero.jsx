import React from "react";
import SearchBar from "../common/SearchBar";
import Button from "../common/Button";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

const Hero = () => {
  return (
    <section className="px-4">
      <div
        className={`relative main-container mt-5 rounded-2xl min-h-[80vh] h-full bg-[url(/images/hero-bg.jpg)] bg-center bg-cover bg-no-repeat bg-blend-soft-light scale-x-[-1] flex justify-center items-center text-center`}
      >
        <div class="absolute inset-0 bg-linear-to-r  from-black/60 to-black/60 rounded-2xl"></div>
        <div className="relative z-20 scale-x-[-1]">
          <motion.div
            variants={staggerContainer}
            initial="start"
            animate="end"
            className="max-w-[700px] w-full my-20"
          >
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white mb-2"
            >
              Find Talent.{" "}
              <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent italic drop-shadow-[0_2px_6px_rgba(16,185,129,0.4)]">
                Build Success.
              </span>
              Faster.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-base text-gray-300 mb-5 italic"
            >
              TradeTalent connects you with skilled freelancers ready to turn
              your ideas into results.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="hidden sm:block"
            >
              <SearchBar></SearchBar>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex max-sm:flex-col gap-y-4 sm:gap-4 mt-5 justify-center"
            >
              <Button className="px-8 py-6 text-base">Post a Job</Button>
              <Button
                className="px-8 py-6 text-white border-white text-base"
                variant="outline"
              >
                Join as Freelancer
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import WaveIllustration from "@/assets/bg-wave.svg";
import SearchBar from "../common/SearchBar";
import Button from "../common/Button";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

const Hero = () => {
  return (
    <section
      className={`relative min-h-[95vh] h-full py-10 bg-[url(/images/hero-bg-2.jpg)] dark:bg-[url(/images/hero-bg.jpg)] bg-center bg-cover bg-no-repeat bg-blend-soft-light dark:scale-x-[-1] `}
    >
      <div class="absolute inset-0 bg-linear-to-r  from-black/80 to-black/20"></div>
      <figure className="absolute bottom-[-130px] left-0 z-10 w-full dark:scale-x-[-1] ">
        <img
          src={WaveIllustration}
          alt="Bg wave"
          className="w-full object-cover"
        />
      </figure>
      <div className="main-container relative z-20 dark:scale-x-[-1]">
        <motion.div
          variants={staggerContainer}
          initial="start"
          animate="end"
          className="max-w-[700px] w-full my-20"
        >
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-7xl font-semibold text-white mb-2"
          >
            Find Talent.{" "}
            <span className="text-indigo-600 italic">Build Success</span>.
            Faster.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-base text-gray-300 mb-5 italic"
          >
            TradeTalent connects you with skilled freelancers ready to turn your
            ideas into results.
          </motion.p>
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
            <SearchBar></SearchBar>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="flex gap-4 mt-5"
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
    </section>
  );
};

export default Hero;

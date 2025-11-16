import React from "react";
import Avatar from "@/assets/avater.png";
import { CheckCircle } from "lucide-react";
import Button from "../common/Button";
import { motion } from "motion/react";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
} from "@/lib/motionVariants";

const BannerCTA = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto"
    >
      <motion.figure
        variants={fadeInRight}
        initial="start"
        whileInView="end"
        viewport={{ once: true }}
        className="overflow-hidden w-full h-[300px] rounded-2xl"
      >
        <img
          src={Avatar}
          alt="Coding illustration"
          className="w-full h-full object-cover object-center"
        />
      </motion.figure>
      <div>
        <motion.h3
          variants={fadeInLeft}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-semibold"
        >
          Work Your Way
        </motion.h3>
        <motion.p
          variants={fadeInLeft}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="not-dark:text-gray-700 mt-2"
        >
          You bring the skill. We'll make earning easy.
        </motion.p>
        <motion.ul
          variants={fadeInLeft}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="mt-5 flex flex-col gap-2"
        >
          <li className="flex gap-2 items-center text-base">
            <span>
              <CheckCircle size={18} className="text-green-500"></CheckCircle>
            </span>
            <span>Save your budget</span>
          </li>
          <li className="flex gap-2 items-center text-base">
            <span>
              <CheckCircle size={18} className="text-green-500"></CheckCircle>
            </span>
            <span>Completed work quickly</span>
          </li>
          <li className="flex gap-2 items-center text-base">
            <span>
              <CheckCircle size={18} className="text-green-500"></CheckCircle>
            </span>
            <span>Safe and secure</span>
          </li>
          <li className="flex gap-2 items-center text-base">
            <span>
              <CheckCircle size={18} className="text-green-500"></CheckCircle>
            </span>
            <span>24/7 support</span>
          </li>
        </motion.ul>
        <motion.div
          variants={fadeInLeft}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
        >
          <Button className="mt-5 cursor-pointer w-fit">Become a Seller</Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BannerCTA;

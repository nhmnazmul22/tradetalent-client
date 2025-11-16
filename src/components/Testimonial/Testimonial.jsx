import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/constant";
import { fadeInUp } from "@/lib/motionVariants";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className="mt-10 bg-white dark:bg-black rounded-xl shadow-sm p-8 md:p-12 grid grid-cols-1 lg:grid-cols-4 gap-y-8 lg:gap-8"
    >
      <div className="lg:border-r  lg:pr-6 flex flex-col gap-4 justify-center items-center">
        <h4 className="text-lg font-medium">Rating</h4>
        <p className="text-5xl font-bold">
          4.9<span className="text-2xl font-normal">/5</span>
        </p>

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="w-8 h-8 bg-green-600 text-white flex items-center justify-center text-sm rounded"
            >
              ★
            </span>
          ))}
        </div>

        <p className="text-base text-gray-600 dark:text-gray-300">
          Based on 1,254 reviews
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-green-600 text-4xl">★</span>
          <p className="font-semibold text-black-700 text-2xl">Trustpilot</p>
        </div>
      </div>

      <div className="col-span-3 sm:pl-6">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6"
        >
          <Quote className="text-blue-500 w-10 h-10" />

          <p className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed">
            "{testimonials[activeIndex].text}"
          </p>

          <div className="flex max-sm:flex-col items-center gap-4">
            <img
              src={testimonials[activeIndex].avatar}
              className="w-14 h-14 rounded-full object-cover"
              alt={testimonials[activeIndex].name}
            />

            <div>
              <p className="font-semibold">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonials[activeIndex].role}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center  sm:justify-between mt-4">
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100
                     dark:hover:bg-gray-800 transition"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100
                     dark:hover:bg-gray-800 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="h-0.5 bg-gray-300 dark:bg-gray-600 w-full ml-6 max-sm:hidden"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonial;

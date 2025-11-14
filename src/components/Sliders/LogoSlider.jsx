import { companyLogos } from "@/constant";
import React from "react";
import { motion } from "motion/react";

const LogoSlider = () => {
  return (
    <section className="py-10 overflow-hidden">
      <div className="main-container relative">
        <motion.div
          className="flex gap-10"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <figure
              key={`${logo.alt}-${index}`}
              className="min-w-[180px] opacity-70 hover:opacity-100 transition"
            >
              <img src={logo.logo} alt={logo.alt} className="w-full h-auto" />
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSlider;

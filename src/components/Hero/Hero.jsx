import React from "react";
import WaveIllustration from "@/assets/bg-wave.svg";

const Hero = () => {
  return (
    <section
      className={`relative min-h-[95vh] h-full py-10 bg-[url(/images/hero-bg-2.jpg)] dark:bg-[url(/images/hero-bg.jpg)] bg-center bg-cover bg-no-repeat bg-blend-soft-light dark:scale-x-[-1] `}
    >
      <div class="absolute inset-0 bg-linear-to-r  from-black/80 to-black/20"></div>
      <figure className="absolute bottom-[-150px] left-0 z-99 w-full ">
        <img
          src={WaveIllustration}
          alt="Bg wave"
          className="w-full object-cover"
        />
      </figure>
      <div className="main-container"></div>
    </section>
  );
};

export default Hero;

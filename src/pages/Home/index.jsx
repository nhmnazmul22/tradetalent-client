import Hero from "@/components/Hero/Hero";
import LogoSlider from "@/components/Sliders/LogoSlider";
import ServicesSlider from "@/components/Sliders/ServicesSlider";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <Hero></Hero>
      <LogoSlider></LogoSlider>
      <ServicesSlider></ServicesSlider>
    </section>
  );
};

export default HomePage;

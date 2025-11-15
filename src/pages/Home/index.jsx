import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import BannerCTA from "@/components/CTA/BannerCTA";
import Hero from "@/components/Hero/Hero";
import Sellers from "@/components/Sellers/Sellers";
import LogoSlider from "@/components/Sliders/LogoSlider";
import ServicesSlider from "@/components/Sliders/ServicesSlider";
import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <Section className="py-10! overflow-hidden">
        <div className="main-container relative">
          <LogoSlider></LogoSlider>
        </div>
      </Section>
      <Section className="bg-blue-50  dark:bg-black">
        <div className="main-container">
          <div className="">
            <SectionHeading
              title="Popular Services"
              subtitle="Explore the most popular service categories and find the perfect
        freelance talent for your project."
            ></SectionHeading>
            <ServicesSlider></ServicesSlider>
          </div>
        </div>
      </Section>
      <Section>
        <div className="main-container">
          <SectionHeading
            title="Top Sellers"
            subtitle="Over 1200+ expect freelancers are waiting for you"
          ></SectionHeading>
          <div className="mt-10">
            <Sellers></Sellers>
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/"
              className="underline hover:text-blue-500 transition-all duration-300 "
            >
              View All Sellers
            </Link>
          </div>
        </div>
      </Section>
      <Section className="relative">
        <div className="absolute top-0 left-0 bg-blue-50  dark:bg-black bg w-full h-full -z-1 -skew-3"></div>
        <div className="main-container">
          <BannerCTA></BannerCTA>
        </div>
      </Section>
    </>
  );
};

export default HomePage;

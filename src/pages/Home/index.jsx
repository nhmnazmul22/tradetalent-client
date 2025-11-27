import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import BannerCTA from "@/components/CTA/BannerCTA";
import Hero from "@/components/Hero/Hero";
import Sellers from "@/components/Sellers/Sellers";
import Services from "@/components/Services/Services";
import LogoSlider from "@/components/Sliders/LogoSlider";
import ServicesSlider from "@/components/Sliders/ServicesSlider";
import React, {use} from "react";
import { Link } from "react-router";
import Testimonial from "@/components/Testimonial/Testimonial";
import Blogs from "@/components/Blogs/Blogs";
import {getFeaturedServices} from "@/Services/services.js";
import {getTopSellerProfile} from "@/Services/sellerProfile.js";

const featuredServicePromise = getFeaturedServices();
const sellerPromise = getTopSellerProfile();

const HomePage = () => {
      const serviceResult = use(featuredServicePromise);
      const sellerResult = use(sellerPromise);

    return (
    <>
      <Hero></Hero>
      <Section className="py-10! overflow-hidden">
        <div className="main-container relative">
          <LogoSlider></LogoSlider>
        </div>
      </Section>
      <Section className="bg-gray-50  dark:bg-neutral-900">
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
            <Sellers sellers={sellerResult.data}></Sellers>
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
        <div className="absolute top-0 left-0 bg-gray-50 dark:bg-neutral-900 bg w-full h-full -z-1 -skew-3"></div>
        <div className="main-container">
          <BannerCTA></BannerCTA>
        </div>
      </Section>
      <Section>
        <div className="main-container">
          <div>
            <SectionHeading
              title="Latest Services"
              subtitle="Explore the best services that suit you"
            ></SectionHeading>
            <div className="mt-10">
              <Services services={serviceResult.data}></Services>
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/"
                className="underline hover:text-blue-500 transition-all duration-300 "
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-gray-50  dark:bg-neutral-900">
        <div className="main-container">
          <SectionHeading
            title="What Users Say About Us"
            subtitle="Hear experiences from people who trust our platform."
          />
          <Testimonial />
        </div>
      </Section>
      <Section>
        <div className="main-container">
          <SectionHeading
            title="Latest Blogs"
            subtitle="Get interesting insights, articles, and news"
          />
          <div className="mt-10">
            <Blogs></Blogs>
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/"
              className="underline hover:text-blue-500 transition-all duration-300 "
            >
              View All Blogs
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;

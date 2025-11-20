import Section from "@/components/common/Section";
import LeftSide from "@/components/ServiceDetails/LeftSide";
import RightSide from "@/components/ServiceDetails/RightSide";
import React from "react";
import { motion } from "motion/react";
import { staggerContainer } from "@/lib/motionVariants";

const ServiceDetail = () => {
  const service = {
    sellerId: "691d31c0be65f263703ec21b",
    title: "Build Professional React Website",
    description:
      "I will create a full website with responsive UI and animations.",
    category: "Web Development",
    price: 150,
    images: "/images/hero-bg-2.jpg",
    pricing: {
      basic: {
        price: 100,
        title: "Starter Website",
        description:
          "Simple and professional landing page designed for small businesses.",
        deliveryDays: 2,
        revisions: 1,
        features: [
          "1-page website",
          "Mobile responsive",
          "Basic animations",
          "Contact form",
        ],
        includedPages: 1,
        supportDays: 7,
      },
      standard: {
        price: 200,
        title: "Professional Website",
        description:
          "Multi-page modern website with premium UI/UX, SEO setup, and smooth animations.",
        deliveryDays: 4,
        revisions: 2,
        features: [
          "Up to 5 pages",
          "Advanced animations",
          "Basic SEO optimization",
          "Contact & newsletter forms",
          "Image optimization",
        ],
        includedPages: 5,
        supportDays: 15,
      },
      premium: {
        price: 350,
        title: "Full Business Website",
        description:
          "Full-stack website solution with admin dashboard, database support, and authentication.",
        deliveryDays: 7,
        revisions: 4,
        features: [
          "Full website (Unlimited pages)",
          "Admin panel",
          "Database integration",
          "User login & authentication",
          "Premium SEO setup",
          "Performance optimization",
          "Deployment included",
        ],
        includedPages: "Unlimited",
        supportDays: 30,
      },
    },
  };

  const seller = {
    name: "Nazmul Hasan",
    avatar: "/mnt/data/c462b787-2cca-456e-9a6c-0cffe524ffaa.png",
    title: "Full Stack Developer",
    rating: 4.9,
    totalOrders: 81,
    location: "Bangladesh",
    about:
      "Experienced developer building web & mobile apps with React, Node, and MongoDB. I deliver clean, maintainable code and great UX.",
  };

  return (
    <Section className="min-h-screen">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 rel">
          <LeftSide service={service} seller={seller}></LeftSide>
          <RightSide service={service} seller={seller}></RightSide>
        </div>
      </div>
    </Section>
  );
};

export default ServiceDetail;

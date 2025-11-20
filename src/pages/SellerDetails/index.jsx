import React from "react";
import SellerHeader from "@/components/SellerProfile/SellerHeader";
import SellerAbout from "@/components/SellerProfile/SellerAbout";
import SellerSkills from "@/components/SellerProfile/SellerSkills";
import SellerServices from "@/components/SellerProfile/SellerServices";
import SellerSidebar from "@/components/SellerProfile/SellerSidebar";

const SellerProfilePage = () => {
  const seller = {
    name: "NHM Nazmul",
    bio: "Professional Full Stack Developer | MERN & React Native Specialist",
    description:
      "I create modern, scalable web and mobile applications using React, Node.js, and MongoDB. My focus is on clean UI, optimized performance, and maintainable code.",
    rating: 4.9,
    totalOrders: 120,
    totalReviews: 45,
    verified: true,
    featured: true,
    since: "2021",
    location: "Dhaka, Bangladesh",
    languages: ["English", "Bangla"],
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "React Native",
    ],
  };

  const services = [
    {
      title: "Next.js Web App Development",
      price: "$350",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "React Native Mobile App",
      price: "$250",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Full Stack MERN App",
      price: "$500",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black dark:text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          <SellerHeader seller={seller} />
          <SellerAbout description={seller.description} />
          <SellerSkills skills={seller.skills} />
          <SellerServices services={services} />
        </div>
        {/* RIGHT */}
        <SellerSidebar seller={seller} />
      </div>
    </div>
  );
};

export default SellerProfilePage;

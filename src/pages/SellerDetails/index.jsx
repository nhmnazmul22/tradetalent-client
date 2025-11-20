import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Services from "@/components/Services/Services";
import SellerAbout from "@/components/SellerProfile/SellerAbout";
import SellerSkills from "@/components/SellerProfile/SellerSkills";
import SellerInsights from "@/components/SellerProfile/SellerInsights";
import AboutTabContent from "@/components/SellerProfile/AboutTabContent";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

// Mock Data
const profile = {
  name: "Lucy Haley",
  role: "Human Resources",
  featured: true,
  avatar: "/images/hero-bg-2.jpg",
  rating: 4.5,
  rate: "$60/day",
  location: "Buffalo",
  languages: ["Chinese", "English"],
  skills: ["Recruitment", "Software"],
  earnings: 1418,
  completed: 12,
  memberSince: "Jul 2024",
};

const ProfilePage = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      <Card className="p-6 h-max sticky top-10 bg-white dark:bg-neutral-900 shadow-sm">
        <motion.div variants={fadeInUp}>
          <SellerAbout profile={profile}></SellerAbout>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <SellerSkills skills={profile.skills}></SellerSkills>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <SellerInsights profile={profile}></SellerInsights>
        </motion.div>
      </Card>

      <div className="lg:col-span-2">
        <Tabs defaultValue="about">
          <motion.div variants={fadeInUp}>
            <TabsList className="mb-6 w-full">
              <TabsTrigger value="about">About Me</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="about">
            <motion.div
              variants={fadeInUp}
              initial="start"
              whileInView="end"
              viewport={{ once: true }}
            >
              <AboutTabContent></AboutTabContent>
            </motion.div>
          </TabsContent>

          <TabsContent value="services">
            <Services className="grid-cols-1!"></Services>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ProfilePage;

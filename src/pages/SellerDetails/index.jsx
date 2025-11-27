import React, {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import Services from "@/components/Services/Services";
import SellerAbout from "@/components/SellerProfile/SellerAbout";
import SellerSkills from "@/components/SellerProfile/SellerSkills";
import SellerInsights from "@/components/SellerProfile/SellerInsights";
import AboutTabContent from "@/components/SellerProfile/AboutTabContent";
import {motion} from "motion/react";
import {fadeInUp, staggerContainer} from "@/lib/motionVariants";
import {Navigate, useLoaderData} from "react-router";
import {getSellerServices} from "@/Services/services.js";



const ProfilePage = () => {
    const result = useLoaderData();

    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
              if(result.data.userEmail){
                  const response = await getSellerServices(result.data.userEmail);
                  if(response.success) setServices(response.data);
              }
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        }

        fetchServices();
    }, [result.data.userEmail]);



    return (
        <motion.div
            variants={staggerContainer}
            initial="start"
            whileInView="end"
            viewport={{once: true}}
            className="max-w-6xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
            <Card className="p-6 h-max sticky top-10 bg-white dark:bg-neutral-900 shadow-sm">
                {result.data && (
                    <>
                        <motion.div variants={fadeInUp}>
                            <SellerAbout profile={result.data}></SellerAbout>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <SellerSkills skills={result.data?.skills}></SellerSkills>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <SellerInsights profile={result.data}></SellerInsights>
                        </motion.div>
                    </>
                )}
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
                            viewport={{once: true}}
                        >
                            <AboutTabContent profile={result.data}></AboutTabContent>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="services">
                        <Services services={services} className="grid-cols-1!"></Services>
                    </TabsContent>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default ProfilePage;

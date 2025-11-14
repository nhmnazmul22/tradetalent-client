import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import { Link } from "react-router";
import Autoplay from "embla-carousel-autoplay";
import { fadeInUp } from "@/lib/motionVariants";
import SectionHeading from "../common/SectionHeading";

const ServicesSlider = () => {
  return (
    <section className="py-20 dark:bg-black">
      <div className="main-container">
        <div className="items-center">
          <SectionHeading
            title="Popular Services"
            subtitle="Explore the most popular service categories and find the perfect
        freelance talent for your project."
          ></SectionHeading>
          <motion.div
            variants={fadeInUp}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className="mt-10"
          >
            <Carousel
              opts={{
                align: "center",
              }}
              className="w-full"
              plugins={[Autoplay({ delay: 1500 })]}
            >
              <CarouselContent>
                {Array.from({ length: 15 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/7 h-[280px]"
                  >
                    <div className="p-1">
                      <Link>
                        <Card className="hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-4">
                            <span className="inline-block bg-blue-50/50 rounded-full mb-3 text-gray-600">
                              <Code2 size={28}></Code2>
                            </span>
                            <h4 className="text-primary text-base">
                              Programming and Tech
                            </h4>
                            <p className="mt-2 text-gray-600 font-sm">
                              4 Services
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import { Link } from "react-router";
import Autoplay from "embla-carousel-autoplay";
import { fadeInUp } from "@/lib/motionVariants";
import { services } from "@/constant";

const ServicesSlider = () => {
  return (
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
          {services.items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 h-[220px]"
            >
              <div className="p-1">
                <Link>
                  <Card className="hover:shadow-lg transition-all duration-300 border-0 dark:hover:ring-1 dark:ring-blue-500 ">
                    <CardContent className="p-4">
                      <span className="inline-block bg-blue-50/50 dark:bg-transparent rounded-full mb-3 text-gray-800 dark:text-gray-200">
                        <item.icon size={28}></item.icon>
                      </span>
                      <h4 className="text-primary text-base">{item.label}</h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300 font-sm">
                        {item.subItems.length} Services
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
  );
};

export default ServicesSlider;

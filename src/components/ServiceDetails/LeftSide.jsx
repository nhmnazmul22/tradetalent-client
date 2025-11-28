import React from "react";
import Button from "@/components/common/Button";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

const LeftSide = ({ service, seller }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className="w-full space-y-6"
    >
      <div className="bg-white dark:bg-neutral-900 shadow dark:shadow-neutral-800 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
          <motion.figure variants={fadeInUp} className="md:col-span-2">
            <img
              src={service.images}
              alt={service.title}
              className="w-full h-72 object-cover rounded-md"
            />
          </motion.figure>

          <div className="md:col-span-2">
            <div className="bg-gray-50 dark:bg-neutral-800 rounded-md p-4 h-full flex flex-col justify-between">
              <motion.div variants={fadeInUp}>
                <h3 className="text-lg font-semibold dark:text-white">
                  {service.title ||  "N/A"}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {service.category ||  "N/A"}
                </p>

                <div className="mt-4">
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm">
                    Seller: {seller.name ||  "N/A"}
                  </span>

                  <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    <div>
                      Rating: <strong>{seller.rating}</strong> ⭐
                    </div>
                    <div>{seller.totalOrders} orders completed</div>
                    <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                      {seller.location ||  "N/A"}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-4">
                <Button className="w-full! py-2 rounded-md font-medium">
                  Contact Seller
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <motion.div
          variants={fadeInUp}
          className="p-6 border-t dark:border-neutral-800"
        >
          <h4 className="text-xl font-semibold dark:text-white">
            About this gig
          </h4>

          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            {service.description}
          </p>

          {/* Quick Info Boxes */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded">
              <h5 className="text-sm font-semibold dark:text-white">
                Delivery
              </h5>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Varies by package
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded">
              <h5 className="text-sm font-semibold dark:text-white">
                Revisions
              </h5>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Depends on package
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded">
              <h5 className="text-sm font-semibold dark:text-white">Support</h5>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                See package details
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-6">
            <h5 className="text-lg font-semibold dark:text-white">
              What you'll get
            </h5>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              {service.pricing.standard.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Seller Card */}
      <motion.div
        variants={fadeInUp}
        className="bg-white dark:bg-neutral-900 shadow dark:shadow-neutral-800 rounded-lg p-6"
      >
        <div className="flex items-start space-x-4">
          <img
            src={seller.avatar}
            className="w-20 h-20 rounded-full object-cover"
            alt="seller"
          />
          <div>
            <h4 className="text-lg font-semibold dark:text-white">
              {seller.name || "N/A"}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {seller.title ||  "N/A"}
            </p>

            <p className="mt-3 text-gray-700 dark:text-gray-300">
              {seller.about ||  "N/A"}
            </p>
            <div className="mt-3 text-sm">
              <div className="flex gap-1 items-center">
                Rating: <span className="font-medium">{seller.rating || 0}</span>
                <span>
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-amber-500 "
                  ></Star>
                </span>
              </div>
              <div>{seller.totalOrders || 0} orders</div>
            </div>

            <div className="mt-4 flex items-center space-x-3">
              <Button
                variant="outline"
                className="px-3 py-1 text-neutral-500 border border-neutral-400 hover:border-blue-500"
              >
                View Profile
              </Button>

              <Button className="px-3 py-1 text-white rounded text-sm">
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeftSide;

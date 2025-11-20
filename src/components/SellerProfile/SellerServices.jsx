import React from "react";
import ServiceCard from "./ServiceCard";

const SellerServices = ({ services }) => (
  <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg p-6">
    <h2 className="text-xl font-semibold text-blue-500 mb-3">Services</h2>
    {services.length === 0 ? (
      <p className="text-gray-500 dark:text-gray-400">No services added yet.</p>
    ) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    )}
  </div>
);

export default SellerServices;

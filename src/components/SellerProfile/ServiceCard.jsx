import React from "react";
import Button from "../common/Button";

const ServiceCard = ({ service }) => (
  <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-4 flex flex-col gap-2">
      <h3 className="font-semibold text-lg text-blue-500">{service.title}</h3>
      <p className="text-green-600 font-bold">{service.price}</p>
      <Button variant="outline">View Service</Button>
    </div>
  </div>
);

export default ServiceCard;

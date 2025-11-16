import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="grid grid-cols-2 gap-5 items-center max-w-7xl mx-auto">
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
      <ServiceCard></ServiceCard>
    </div>
  );
};

export default Services;

import React from "react";
import Button from "../common/Button";
import { services } from "@/constant";

const ServiceFilter = () => {
  return (
    <div className="my-10">
      <div className="flex gap-3 justify-center items-center">
        {services.map((item) => (
          <Button key={item.label} variant="outline" className="">
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ServiceFilter;

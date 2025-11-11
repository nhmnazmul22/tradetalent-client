import { Laptop } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className="text-black dark:text-white flex items-center gap-2">
      <span className="inline-block bg-linear p-1 rounded-lg text-white">
        <Laptop size={32} className=""></Laptop>
      </span>
      <h2 className="text-3xl font-bold">
        Trade<span className="italic">Talent</span>
      </h2>
    </div>
  );
};

export default Logo;

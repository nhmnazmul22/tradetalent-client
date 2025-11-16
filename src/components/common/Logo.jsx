import { Laptop } from "lucide-react";
import React from "react";

const Logo_v2 = ({ logoTextColor }) => {
  return (
    <div className="flex items-center gap-2 text-black dark:text-white">
      <div className="bg-linear text-white p-2 rounded-lg flex items-center justify-center">
        <Laptop size={20} />
      </div>

      <div className="flex flex-col gap-0">
        <h2 className={`text-lg font-bold ${logoTextColor}`}>
          Trade<span className="italic text-blue-600">Talent</span>
        </h2>
        <span className="text-xs opacity-70 italic text-gray-700 dark:text-gray-200">
          Empowering Digital Skills
        </span>
      </div>
    </div>
  );
};

export default Logo_v2;

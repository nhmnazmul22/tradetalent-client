import React from "react";
import Avatar from "@/assets/avater.png";
import { CheckCircle } from "lucide-react";

const BannerCTA = () => {
  return (
    <div className="grid grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
      <figure className="overflow-hidden w-full h-[300px] rounded-2xl">
        <img
          src={Avatar}
          alt="Coding illustration"
          className="w-full h-full object-cover object-center"
        />
      </figure>
      <div>
        <h3 className="text-5xl font-semibold">Work Your Way</h3>
        <p className="not-dark:text-gray-700 mt-2">
          You bring the skill. We'll make earning easy.
        </p>
        <ul className="mt-5 flex flex-col gap-2">
          <li className="flex gap-2 items-center text-base">
            <span>
              <CheckCircle size={18} className="text-green-500"></CheckCircle>
            </span>
            <span>Save your budget</span>
          </li>
          <li className="flex gap-2 items-center text-base">
            <span>
              <CheckCircle size={18} className="text-green-500"></CheckCircle>
            </span>
            <span>Completed work quickly</span>
          </li>
          <li className="flex gap-2 items-center text-base">
            <span>
              <CheckCircle size={18} className="text-green-500"></CheckCircle>
            </span>
            <span>Safe and secure</span>
          </li>
          <li className="flex gap-2 items-center text-base">
            <span>
              <CheckCircle size={18} className="text-green-500"></CheckCircle>
            </span>
            <span>24/7 support</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BannerCTA;

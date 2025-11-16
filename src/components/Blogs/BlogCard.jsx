import React from "react";
import Avater from "@/assets/avater.png";
import { Separator } from "../ui/separator";
import { Link } from "react-router";

const BlogCard = () => {
  return (
    <div className="p-2">
      <figure className="w-full h-[300px] rounded-lg overflow-hidden">
        <img src={Avater} alt="Avater" className="w-full h-full object-cover" />
      </figure>
      <div className="p-2 mt-3">
        <div className="flex gap-2 items-center text-base">
          <Link to="/" className="text-blue-500">
            Learn
          </Link>
          <Separator
            orientation="vertical"
            className="border-3 rounded-full border-blue-500"
          />
          <p>July 10, 2024</p>
        </div>
        <Link>
          <h2 className="text-xl font-semibold mt-2  hover:text-blue-500 transition-all duration-300">
            20 Companies with Location-Agnostic Pay in 2024
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

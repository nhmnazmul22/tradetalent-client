import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Avatar from "@/assets/avater.png";
import { Clock, Eye, Heart, ShoppingBasket, StarIcon } from "lucide-react";
import { Separator } from "../ui/separator";
const ServiceCard = () => {
  return (
    <Card className="border p-4 sm:p-0 flex flex-col sm:flex-row group">
      <figure className="w-full sm:max-w-[220px] max-sm:h-[300px] rounded-xl sm:rounded-l-xl overflow-hidden relative">
        <img
          src={Avatar}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
        />
        <div className="absolute top-3  left-3 bg-yellow-500 py-1 px-4 rounded-full">
          Featured
        </div>
      </figure>
      <div className="py-5 flex-1 pe-5">
        <CardHeader className="p-0">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <img src={Avatar} alt="avatar" className="w-8 h-8 rounded-full" />
              <p className="text-base font-semibold">Mr. Khan mia</p>
            </div>
            <button className="cursor-pointer">
              <Heart></Heart>
            </button>
          </div>
        </CardHeader>
        <CardContent className="p-0 mt-2">
          <h4 className="text-lg sm:text-xl font-medium">
            I will craft engaging social media marketing, copywriting
          </h4>
          <div className="flex max-sm:flex-col gap-1 sm:items-center mt-3">
            <p className="flex gap-1 items-center">
              <span>
                <StarIcon
                  size={20}
                  className="text-yellow-500 fill-yellow-500"
                ></StarIcon>
              </span>
              <span className="not-dark:text-gray-700">4.5 (2)</span>
            </p>
            <Separator
              orientation="vertical"
              className="border-4 rounded-full border-gray-200 h-1 max-sm:hidden"
            ></Separator>
            <p className="flex gap-1 items-center not-dark:text-gray-700">
              <span>
                <ShoppingBasket size={20}></ShoppingBasket>
              </span>
              <span>0 Sale</span>
            </p>
            <Separator
              orientation="vertical"
              className="border-4 rounded-full border-gray-200 h-1 max-sm:hidden"
            ></Separator>
            <p className="flex gap-1 items-center not-dark:text-gray-700">
              <span>
                <Eye size={20}></Eye>
              </span>
              <span>0 Views</span>
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-0 flex justify-between items-center mt-10">
          <p className="text-base">
            From <span className="text-lg font-semibold">$55</span>
          </p>
          <p className="text-base flex gap-2 items-center">
            <span>
              <Clock size={20}></Clock>
            </span>
            <span>2 Week</span>
          </p>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ServiceCard;

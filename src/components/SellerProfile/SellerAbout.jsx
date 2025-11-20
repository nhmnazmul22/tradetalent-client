import React from "react";
import Button from "../common/Button";
import { Badge } from "../ui/badge";
import { MapPin, Star, Send, Mail } from "lucide-react";

const SellerAbout = ({ profile }) => (
  <div className="flex flex-col items-center text-center">
    <figure>
      <img
        src={profile.avatar}
        className="w-28 h-28 rounded-full border"
        alt=""
      />
    </figure>
    <h2 className="text-xl font-semibold mt-4">{profile.name}</h2>
    <p className="text-gray-500">{profile.role}</p>
    {profile.featured && (
      <Badge className="mt-2 bg-yellow-500 text-white">Featured</Badge>
    )}
    <p className="mt-3 flex items-center gap-1 text-yellow-500 font-medium">
      <Star size={16} className="fill-yellow-500" /> {profile.rating}
    </p>
    <p className="font-semibold mt-1">{profile.rate}</p>
    <p className="flex items-center gap-1 mt-3 text-gray-600 dark:text-gray-300">
      <MapPin size={16} /> {profile.location}
    </p>
    <p className="text-gray-500 mt-1">{profile.languages.join(", ")}</p>

    <div className="w-full mt-5 flex flex-col gap-3">
      <Button className="py-2 rounded-lg flex items-center justify-center gap-2">
        <Send size={16} /> Send Job Invitation
      </Button>
      <button className="border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800">
        <Mail size={16} /> Send Message
      </button>
    </div>
  </div>
);

export default SellerAbout;

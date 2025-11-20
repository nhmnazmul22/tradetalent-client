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
import {
  DollarSign,
  Globe,
  Heart,
  MapPin,
  StarIcon,
  Verified,
} from "lucide-react";
import FeaturedIcons from "@/assets/featured.svg";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Link } from "react-router";

const SellersCart = () => {
  return (
    <Link to="/sellers/1">
      <Card className="relative py-5 px-4 gap-4 not-dark:bg-yellow-50 not-dark:border-yellow-200 ">
        <CardHeader className="gap-0">
          <figure className="w-14 h-14 rounded-full overflow-hidden mx-auto">
            <img src={Avatar} alt="Avatar" />
          </figure>
          <CardTitle className="mt-2  text-center flex gap-2 items-center justify-center">
            Mr. Khan Mia
            <span>
              <Verified size={16} className="text-green-500"></Verified>
            </span>
          </CardTitle>
          <CardDescription className="text-center">
            Software Engineer
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 items-start">
          <p className="flex gap-2 items-center">
            <span>
              <DollarSign size={18}></DollarSign>
            </span>
            <span className="text-base">$200 / hr</span>
          </p>
          <p className="flex gap-2 items-center">
            <span>
              <MapPin size={18}></MapPin>
            </span>
            <span className="text-base">New York City</span>
          </p>
          <p className="flex gap-2 items-center">
            <span>
              <Globe size={18}></Globe>
            </span>
            <span className="text-base">English, Russian</span>
          </p>
          <div className="flex gap-2 items-center justify-center mt-2">
            <Badge>Recruitment</Badge>
            <Badge>Software</Badge>
          </div>
        </CardContent>
        <Separator className=""></Separator>
        <CardFooter className="flex justify-between items-center px-0">
          <p className="flex gap-2 items-center">
            <span>
              <StarIcon
                size={20}
                className="text-yellow-500 fill-yellow-500"
              ></StarIcon>
            </span>
            <span className="not-dark:text-gray-700">4.5 (2)</span>
          </p>
          <p className="not-dark:text-gray-700">6 Services</p>
        </CardFooter>
        <div className="absolute right-3 top-3 flex gap-2 items-center">
          <span>
            <img src={FeaturedIcons} alt="featured" />
          </span>
          <span className="cursor-pointer ">
            <Heart size={22}></Heart>
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default SellersCart;

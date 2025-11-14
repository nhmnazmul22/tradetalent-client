import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "./Button";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center max-w-[600px] h-[60px] w-full bg-white rounded-md rounded-r-none p-1 border border-gray-200">
        <Select>
          <SelectTrigger className="w-[150px] rounded-r-none h-full border-0 text-black shadow-none focus-visible:ring-0 focus-visible:border-0 ">
            <SelectValue placeholder="Select a keyword" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Separator orientation="vertical"></Separator>
        <Input
          className="text-black placeholder:text-base rounded-l-none h-full border-0 shadow-none focus-visible:ring-0 focus-visible:border-0 "
          placeholder="Search for jobs, categories, or keywords..."
        ></Input>
      </div>
      <Button className="h-[60px] rounded-l-none w-[70px]! p-0">
        <Search size={24}></Search>
      </Button>
    </div>
  );
};

export default SearchBar;

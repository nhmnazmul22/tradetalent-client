import React from "react";
import { Button } from "../ui/button";
import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortingFilter = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <Button className="" variant="outline">
        <span>
          <Filter></Filter>
        </span>
        <span>Filter</span>
      </Button>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort</SelectLabel>
            <SelectItem value="apple">Newest</SelectItem>
            <SelectItem value="banana">Oldest</SelectItem>
            <SelectItem value="blueberry">Rating</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortingFilter;

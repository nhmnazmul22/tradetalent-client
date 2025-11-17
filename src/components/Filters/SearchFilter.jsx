import React, { useState } from "react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import Combobox from "../common/Combobox";
import { Folder, MapPin, Search } from "lucide-react";
import Button from "../common/Button";
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const SearchFilter = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [location, setLocation] = useState("");

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <div className="bg-white h-full md:h-[60px] rounded-xl flex max-md:flex-col gap-y-2 items-center p-3 md:p-1 md:pe-0 w-full">
      <div className="flex items-center h-full md:px-2 md:flex-1 w-full">
        <span className="text-neutral-700">
          <Search size={20}></Search>
        </span>
        <Input
          className="flex-1 text-black text-base! placeholder:text-base rounded-l-none h-full border-0 shadow-none
          focus-visible:ring-0 focus-visible:border-0 "
          placeholder="Search for jobs, categories, or keywords..."
        ></Input>
      </div>
      <Separator orientation="vertical" className="w-1 max-md:hidden" />
      <div className="flex items-center h-full md:px-2 max-md:w-full bg-white">
        <span className="text-neutral-700">
          <MapPin size={20}></MapPin>
        </span>
        <div className="flex-1">
          <Combobox
            open={locationOpen}
            setOpen={setLocationOpen}
            value={location}
            setValue={setLocation}
            data={frameworks}
          ></Combobox>
        </div>
      </div>
      <Separator orientation="vertical" className="w-1 max-md:hidden" />
      <div className="flex items-center h-full md:px-2 max-md:w-full bg-white">
        <span className="text-neutral-700">
          <Folder size={20}></Folder>
        </span>
        <div className="flex-1">
          <Combobox
            open={categoryOpen}
            setOpen={setCategoryOpen}
            value={category}
            setValue={setCategory}
            data={frameworks}
          ></Combobox>
        </div>
      </div>
      <Button className="md:h-[60px] rounded-xl md:rounded-l-none w-full md:w-[100px]!">
        <span className="md:hidden">Search</span>
        <Search size={24}></Search>
      </Button>
    </div>
  );
};

export default SearchFilter;

import React from "react";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { Link } from "react-router";
import LucideIcon from "../common/LucideIcon";

const ListItem = ({ label, subItems, icon, ...props }) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="hover:bg-transparent">
        <div>
          <div className="flex gap-2 items-center">
            <p className="bg-linear p-2 rounded-md">
              <LucideIcon name={icon} className="w-4 h-4 text-white" />
            </p>
            <div className="text-sm leading-none font-semibold">{label}</div>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {subItems.map((item, index) => (
              <Link
                to={item.href}
                key={`${item}-${index}`}
                className="text-muted-foreground line-clamp-2 text-sm leading-snug hover:underline hover:text-green-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </NavigationMenuLink>
    </li>
  );
};

export default ListItem;

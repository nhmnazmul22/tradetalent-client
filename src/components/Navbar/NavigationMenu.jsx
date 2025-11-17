import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { menuItems } from "@/constant";
import ListItem from "./ListItem";

function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        {menuItems.map((item, index) => {
          if (item.label === "Categories") {
            return (
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex gap-2 items-center">
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-3 lg:w-[800px]">
                    {item.items.map((childItem) => (
                      <ListItem
                        key={childItem.label}
                        label={childItem.label}
                        icon={childItem.icon}
                        subItems={childItem.subItems}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={`${item.label}-${index}`}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  to={item.href}
                  className="flex flex-row gap-2 items-center"
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
export default Navigation;

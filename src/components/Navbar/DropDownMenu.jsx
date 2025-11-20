import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { userMenu } from "@/constant";
import { LogOut } from "lucide-react";
import { Link } from "react-router";

const DropDownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative z-999">
        <DropdownMenuLabel>My Name</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {userMenu.map((menu) => (
          <DropdownMenuItem>
            <Link to={menu.href} className="flex gap-2 items-center">
              <span>
                <menu.icon size={18} />
              </span>
              <span>{menu.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem className="text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors focus:text-red-600">
          <span>
            <LogOut size={18} className="text-red-500"></LogOut>
          </span>
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;

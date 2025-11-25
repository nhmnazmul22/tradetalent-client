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
import {Link, useNavigate} from "react-router";
import useAuthContext from "@/hooks/useAuth.jsx";

const DropDownMenu = () => {
    const {user, setUser, signOutUser} = useAuthContext()
    const navigate  = useNavigate()

    const handleSignOut = async ()=>{
        await signOutUser();
        setUser(null);
        navigate("/auth/signin");
    }

    return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.photoURL || "https://github.com/shadcn.png"} />
          <AvatarFallback>{user?.displayName[0] || "UN"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative z-999">
        <DropdownMenuLabel>{user?.displayName}</DropdownMenuLabel>
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
        <DropdownMenuItem onClick={handleSignOut} className="text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors focus:text-red-600">
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

import React from "react";
import Navigation from "./NavigationMenu";
import Logo from "../common/Logo";
import Button from "../common/Button";
import ToggleTheme from "../Theme/ToggleTheme";
import { SidebarTrigger } from "../ui/sidebar";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="py-3 bg-white dark:bg-transparent relative z-998">
      <div className="main-container">
        <div className="flex justify-between items-center">
          <Logo></Logo>
          <div className="hidden lg:block">
            <Navigation></Navigation>
          </div>
          <div className="flex gap-3 items-center">
            <ToggleTheme></ToggleTheme>
            <div className="hidden lg:flex gap-2 items-center">
              <Link>
                <Button variant="outline">Post a Job</Button>
              </Link>
              <Link to="/auth/signup">
                <Button>Join as Freelancer</Button>
              </Link>
            </div>
            <div className="block lg:hidden">
              <SidebarTrigger></SidebarTrigger>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

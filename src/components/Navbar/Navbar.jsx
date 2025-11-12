import React from "react";
import Navigation from "./NavigationMenu";
import Logo from "../common/Logo";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <nav className="py-5 mt-10 bg-white dark:bg-transparent relative z-998">
      <div className="main-container">
        <div className="flex justify-between items-center">
          <Logo></Logo>
          <div>
            <Navigation></Navigation>
          </div>
          <div className="flex gap-2 items-center">
            <Button variant="outline">Login</Button>

            <Button>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

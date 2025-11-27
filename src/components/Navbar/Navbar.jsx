import React from "react";
import Navigation from "./NavigationMenu";
import Logo from "../common/Logo";
import Button from "../common/Button";
import ToggleTheme from "../Theme/ToggleTheme";
import {SidebarTrigger} from "../ui/sidebar";
import {Link} from "react-router";
import DropDownMenu from "./DropDownMenu";
import useAuthContext from "@/hooks/useAuth.jsx";

;

const Navbar = () => {
    const {user} = useAuthContext()

    return (
        <nav className="py-3 bg-white dark:bg-transparent relative z-97">
            <div className="main-container">
                <div className="flex justify-between items-center">
                    <Logo></Logo>
                    <div className="hidden lg:block">
                        <Navigation></Navigation>
                    </div>
                    <div className="flex gap-2 items-center">
                        <ToggleTheme></ToggleTheme>
                        {!user && (
                            <div className="hidden lg:flex gap-2 items-center">
                                <Link to="/post-job">
                                    <Button variant="outline">Post a Job</Button>
                                </Link>
                                <Link to="/auth/signup">
                                    <Button>Join as Freelancer</Button>
                                </Link>
                            </div>
                        )}
                        {user && (
                            <div className="flex gap-2 items-center">
                                <DropDownMenu></DropDownMenu>
                            </div>
                        )}
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

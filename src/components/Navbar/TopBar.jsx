import { Bell, Mail, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import ToggleTheme from "../Theme/ToggleTheme";

const TopBar = () => {
  return (
    <section className="bg-linear py-2 fixed top-0 w-full z-999">
      <div className="main-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
            <motion.span
              animate={{ rotate: [0, -20, 20, -15, 15, -10, 10, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block"
            >
              <Bell size={18} />
            </motion.span>
            <Link to="/" className="font-medium text-sm">
              Subscribe for job alerts by email!
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2 text-white">
              <span>
                <Mail size={18} />
              </span>
              <Link
                to="mailto:tradetalent@support.com"
                className="text-sm font-medium"
              >
                tradetalent@support.com
              </Link>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span>
                <Phone size={18} />
              </span>
              <Link to="/" className="text-sm font-medium">
                +88017849437854
              </Link>
            </div>
            <ToggleTheme></ToggleTheme>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;

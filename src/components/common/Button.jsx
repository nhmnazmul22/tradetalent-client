import React from "react";
import { cn } from "@/lib/utils";

const Button = ({ children, variant = "default", className, ...props }) => {
  const baseStyles = `relative group/button flex items-center justify-center overflow-hidden gap-2 rounded-md h-9 px-6 py-5 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none whitespace-pre w-full md:w-auto`;

  const variants = {
    default:
      "bg-green-600 text-white shadow hover:bg-green-600/90 hover:ring-2 hover:ring-green-600 hover:ring-offset-2",
    outline:
      "border border-green-600 text-green-600 dark:text-white bg-transparent hover:bg-green-600 hover:text-white hover:ring-2 hover:ring-green-600 hover:ring-offset-2",
    ghost:
      "bg-transparent text-black hover:bg-black/10 dark:text-white dark:hover:bg-white/10 hover:ring-0",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      <span
        className={`absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out  group-hover/button:-translate-x-40`}
      ></span>

      {children}
    </button>
  );
};

export default Button;

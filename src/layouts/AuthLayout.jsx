import React from "react";
import { Link, Outlet } from "react-router";
import CodingBg from "@/assets/coding-bg.jpg";

const AuthLayout = () => {
  return (
    <div className="flex items-center h-screen">
      <section className="relative h-full basis-1/2 max-md:hidden">
        <figure className="w-full h-full overflow-hidden relative">
          <img
            src={CodingBg}
            alt="coding background"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>
        </figure>
      </section>
      <section className="basis-1/1 md:basis-1/2 h-full">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default AuthLayout;

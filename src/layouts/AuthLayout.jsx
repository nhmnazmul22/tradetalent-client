import React from "react";
import { Outlet } from "react-router";
import CodingBg from "@/assets/coding-bg.jpg";

const AuthLayout = () => {
  return (
    <div className="flex items-center min-h-screen overflow-hidden">
      <section className="basis-1/2 max-md:hidden sticky top-0 left-0 h-screen">
        <figure className="w-full h-full overflow-hidden relative">
          <img
            src={CodingBg}
            alt="coding background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </figure>
      </section>

      <section className="basis-1/1 md:basis-1/2 h-screen overflow-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default AuthLayout;

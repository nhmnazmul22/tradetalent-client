import Navbar from "@/components/Navbar/Navbar";
import TopBar from "@/components/Navbar/TopBar";
import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <header>
        <TopBar></TopBar>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <div>footer</div>
      </footer>
    </>
  );
};

export default RootLayout;

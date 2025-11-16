import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar/AppSidebar";
import { Outlet } from "react-router";
import Footer from "@/components/Footer/Footer";

const RootLayout = () => {
  return (
    <SidebarProvider className="block" defaultOpen={false}>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <AppSidebar></AppSidebar>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </SidebarProvider>
  );
};

export default RootLayout;

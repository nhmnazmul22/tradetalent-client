import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <header>
        <div>top navbar</div>
        <div>Navbar</div>
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

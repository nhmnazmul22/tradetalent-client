import AuthLayout from "@/layouts/AuthLayout";
import RootLayout from "@/layouts/RootLayout";
import Signup from "@/pages/Auth/Signup";
import Signin from "@/pages/Auth/Signin";
import HomePage from "@/pages/Home";
import { createBrowserRouter, Navigate } from "react-router";
import Services from "@/pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/signup"></Navigate>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
    ],
  },
]);

export default router;

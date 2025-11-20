import AuthLayout from "@/layouts/AuthLayout";
import RootLayout from "@/layouts/RootLayout";
import Signup from "@/pages/Auth/Signup";
import Signin from "@/pages/Auth/Signin";
import HomePage from "@/pages/Home";
import { createBrowserRouter, Navigate } from "react-router";
import ServicesPage from "@/pages/Services";
import SellersPage from "@/pages/Sellers";
import PricingPage from "@/pages/Pricing";
import ServiceDetails from "@/pages/ServiceDetails/page";
import SellerProfilePage from "@/pages/SellerDetails";

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
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "sellers",
        element: <SellersPage></SellersPage>,
      },
      {
        path: "pricing",
        element: <PricingPage></PricingPage>,
      },
      {
        path: "sellers/:sellerId",
        element: <SellerProfilePage></SellerProfilePage>,
      },
      {
        path: "services/:serviceId",
        element: <ServiceDetails></ServiceDetails>,
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

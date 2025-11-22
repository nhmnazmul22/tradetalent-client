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
import GuestGuard from "./GuestGuard";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "@/pages/Error/NotFound";
import ErrorPage from "@/pages/Error/Error";
import UnderConstruction from "@/pages/Error/UnderConstruction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "all-jobs",
        element: <UnderConstruction></UnderConstruction>,
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
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <SellerProfilePage></SellerProfilePage>
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <UnderConstruction></UnderConstruction>
          </PrivateRoute>
        ),
      },
      {
        path: "create-service",
        element: (
          <PrivateRoute>
            <UnderConstruction></UnderConstruction>
          </PrivateRoute>
        ),
      },
      {
        path: "my-tasks",
        element: (
          <PrivateRoute>
            <UnderConstruction></UnderConstruction>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/signup"></Navigate>,
      },
      {
        path: "signup",
        element: (
          <GuestGuard>
            <Signup></Signup>
          </GuestGuard>
        ),
      },
      {
        path: "signin",
        element: (
          <GuestGuard>
            <Signin></Signin>
          </GuestGuard>
        ),
      },
    ],
  },
]);

export default router;

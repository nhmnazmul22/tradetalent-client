import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
    ],
  },
]);

export default router;

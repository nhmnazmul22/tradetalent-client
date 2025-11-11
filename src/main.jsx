import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import router from "./routes/route";
import "./index.css";
import ThemeProvider from "@/context/ThemeContext/ThemeContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="trade-talent-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);

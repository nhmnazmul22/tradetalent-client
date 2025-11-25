import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router/dom";
import router from "./routes/route";
import "./index.css";
import ThemeProvider from "@/context/ThemeContext/ThemeContextProvider";
import AuthContextProvider from "./context/AuthContext/AuthContextProvider";
import {Toaster} from "react-hot-toast";
import ProfileContextProvider from "@/context/ProfileContext/ProfileContextProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthContextProvider>
            <ProfileContextProvider>
                <ThemeProvider defaultTheme="light" storageKey="trade-talent-theme">
                    <RouterProvider router={router}/>
                </ThemeProvider>
            </ProfileContextProvider>
            <Toaster position="top-left" reverseOrder={false}/>
        </AuthContextProvider>
    </StrictMode>
);

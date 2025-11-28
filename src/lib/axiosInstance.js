import axios from "axios";
import {signOut} from "firebase/auth";
import auth from "@/firebase/firebase.init.js";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://tradetalent-server.vercel.app"
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken"); // get token from storage

    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error)  => {
        const status = error?.response?.status;

        if (status === 401 || status === 403) {
            signOut(auth).then(()=>{
                localStorage.removeItem("accessToken");
                window.location.href = "/auth/signin";
            })
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://tradetalent-server.vercel.app"
});


export default axiosInstance;
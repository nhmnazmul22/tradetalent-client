import axiosInstance from "@/lib/axiosInstance.js";

export const createOrder = async (orderData)=>{
    try {
        const response = await axiosInstance.post(`/create-order`, orderData);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}


export const getSellerOrderData = async (sellerEmail)=>{
    try {
        const response = await axiosInstance.get(`/seller-orders/${sellerEmail}`);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}
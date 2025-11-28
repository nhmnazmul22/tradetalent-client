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

export const updateOrder = async (orderId, orderData)=>{
    try {
        const response = await axiosInstance.put(`/orders/${orderId}`, orderData);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}

export const deleteOrder = async (orderId)=>{
    try {
        const response = await axiosInstance.delete(`/orders/${orderId}`);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}

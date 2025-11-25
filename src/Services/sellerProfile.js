import axiosInstance from "@/lib/axiosInstance.js";

export const getSellerProfile = async (userEmail)=>{
    try {
        const response = await axiosInstance.get(`/seller-profile/${userEmail}`);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}

export const createSellerProfile = async (profileData)=>{
    try {
        const response = await axiosInstance.post(`/seller-profile`, profileData);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}

export const getSellers = async ()=>{
    try {
        const response = await axiosInstance.get(`/seller-profiles`);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}


export const updateSellerProfile = async (sellerEmail, updatedData)=>{
    try {
        const response = await axiosInstance.put(`/seller-profile/${sellerEmail}`, updatedData);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}
import axiosInstance from "@/lib/axiosInstance.js";

export const getSellerServices = async (sellerEmail)=>{
    try {
        const response = await axiosInstance.get(`/my-services/${sellerEmail}`);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}

export const getServiceById = async (serviceId)=>{
    try {
        const response = await axiosInstance.get(`/services/${serviceId}`);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}

export const getServices = async ()=>{
    try {
        const response = await axiosInstance.get(`/services`);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}

export const getFeaturedServices = async ()=>{
    try {
        const response = await axiosInstance.get(`/featured-services`);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}

export const createService = async (serviceInfo)=>{
    try {
        const response = await axiosInstance.post(`/services`, serviceInfo);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}

export const updateService = async (serviceId, updatedInfo)=>{
    try {
        const response = await axiosInstance.put(`/services/${serviceId}`, updatedInfo);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}

export const deleteService = async (serviceId)=>{
    try {
        const response = await axiosInstance.delete(`/services/${serviceId}`);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}
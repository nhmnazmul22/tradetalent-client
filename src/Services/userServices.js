import axiosInstance from "@/lib/axiosInstance.js";


export const saveUser =  async  (payload)=>{
    try{
        const response = await axiosInstance.post("/create-user", payload);
        if(response.data.success){
            return response.data;
        }
    }catch (err){
        console.error(err);
        return {success:false, message: err.message || "Something went wrong"};
    }
}

export const getUser = async (email)=>{
    try {
        const response = await axiosInstance.get(`/user/${email}`);
        return response.data
    }catch (err){
        console.error(err);
        return {success: false, message: err?.message || "Something went wrong"}
    }
}
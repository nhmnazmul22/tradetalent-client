import React, {useState} from "react";
import {motion} from "motion/react";
import {staggerContainer, fadeInUp} from "@/lib/motionVariants";
import CreateProfileForm from "@/components/Form/CreateProfileForm.jsx";
import useProfileContext from "@/hooks/useProfile.jsx";
import {Navigate} from "react-router";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth.jsx";
import {createSellerProfile, getSellerProfile} from "@/Services/sellerProfile.js";

const CreateSellerProfile = () => {
    const {profile, setProfile} = useProfileContext();
    const {user} = useAuth();
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());

            const payload = {
                ...data,
                userEmail: user.email,
                skills: data.skills ? data.skills.split(',').map(skill => skill.trim()) : [],
                verified: user.verified || false,
            }

            const response = await createSellerProfile(payload);

            if (response.success) {
                toast.success("Seller profile created successfully!");
                const response = await  getSellerProfile(user.email);
                setProfile(response.data);
                e.target.reset()
            }
        } catch (err) {
            console.error(err);
            toast.error(err?.message || "Something went wrong!!");
        } finally {
            setLoading(false)
        }
    }


    if (profile) {
        return <Navigate to="/profile" replace/>;
    }


    return (
        <motion.div
            variants={staggerContainer}
            initial="start"
            animate="end"
            className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 flex items-center justify-center max-sm:px-4"
        >
            <motion.div
                variants={fadeInUp}
                className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl p-6 shadow"
            >
                <CreateProfileForm handleSubmit={handleSubmit} loading={loading}/>
            </motion.div>
        </motion.div>
    );
};

export default CreateSellerProfile;

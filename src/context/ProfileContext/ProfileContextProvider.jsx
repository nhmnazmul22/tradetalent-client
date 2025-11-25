import ProfileContext from "./ProfileContext.jsx";
import useAuth from "@/hooks/useAuth.jsx";
import {getUser} from "@/Services/userServices.js";
import {useEffect, useState} from "react";
import {getSellerProfile} from "@/Services/sellerProfile.js";

const ProfileContextProvider = ({children}) => {
    const {user} = useAuth();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const sellerProfile = async () => {
            const profileInfo = await getSellerProfile(user.email);
            if (profileInfo.success) {
                setProfile(profileInfo.data);
            }

        }
        sellerProfile()
    }, [user.email]);


    return (
        <ProfileContext.Provider value={{profile, setProfile}}>{children}</ProfileContext.Provider>
    );
};

export default ProfileContextProvider;

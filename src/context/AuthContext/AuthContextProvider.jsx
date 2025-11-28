import {useEffect, useState} from "react";
import AuthContext from "./AuthContext";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";
import {GoogleAuthProvider} from "firebase/auth";
import Loader from "@/components/Fallback/Loader";

const provider = new GoogleAuthProvider();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    const signOutUser = () => {
        return signOut(auth);
    };

    const updateUser = (data) => {
        return updateProfile(auth.currentUser, {
            displayName: data.displayName,
            photoURL: data.photoURL,
        });
    };

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
            localStorage.setItem("accessToken", currentUser.accessToken)
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    if (loading) {
        return <Loader></Loader>;
    }

    const authInfo = {
        createUser,
        signinUser,
        signInWithGoogle,
        signOutUser,
        updateUser,
        setLoading,
        setUser,
        loading,
        user,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthContextProvider;

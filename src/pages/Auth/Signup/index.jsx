import Logo from "@/components/common/Logo";
import SignupForm from "@/components/Form/SignupForm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { validatePassword } from "@/lib/utils";
import toast from "react-hot-toast";
import useAuthContext from "@/hooks/useAuth";
import {saveUser} from "@/Services/userServices.js";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [type, setType] = useState("seller");
  const {
    createUser,
    signInWithGoogle,
    signOutUser,
    updateUser,
    setUser,
    setLoading: authLoading,
  } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      const isValidPassword = validatePassword(data.password);
      if (!isValidPassword.success) {
        toast.error(isValidPassword.message);
        return;
      }

      await createUser(data.email, data.password);

      // Updated The user
      if (data.photoURL || data.firstName) {
        await updateUser({
          displayName: data.firstName + data.lastName,
          photoURL: data.photoURL,
        });
      }

      // Save the user in database
        const payload = {
            name: `${data.firstName} ${data.lastName}`,
            username: data.username,
            email: data.email,
            phone: data.phone,
            role: type,
            avatar: data.photoURL
        }
        await saveUser(payload);


      // Sign out the user
      setUser(null);
      await signOutUser();
      e.target.reset();
      toast.success("Registration successful. Please, Login now");
      navigate(location.state || "/auth/signin");
    } catch (err) {
      toast.error(err?.message || "Something went wrong")
    } finally {
      setLoading(false);
    }
  };


  const handleGoogleLogin = async () => {
        setGoogleLoading(true)
        try {
            const result = await signInWithGoogle();

            // Save the user in database
            const payload = {
                name: result.user.displayName || "Gust",
                username: result.user.username || "",
                email: result.user.email,
                phone: result.user.phone || "",
                role: type,
                avatar: result.user.photoURL,
            }
            if(result.user){
                await saveUser(payload);
            }

            navigate(location.state || "/");
        } catch (err) {
            console.error(err);
        } finally {
            setGoogleLoading(false);
            authLoading(false);
        }
    };

  return (
    <div className="w-full h-full flex justify-center items-center p-10">
      <div className="max-w-xl w-full">
        <Link to="/">
          <Logo></Logo>
        </Link>
        <div className="mt-5">
          <h3 className="text-4xl font-semibold">Sign Up</h3>
          <p className="text-lg text-neutral-700 mt-2">
            or already have an account?
            <Link to="/auth/signin" className="text-blue-500 font-medium ms-1">
              Sign in
            </Link>
          </p>
        </div>
        <div className="">
          <SignupForm
            loading={loading}
            setType={setType}
            type={type}
            handleSubmit={handleSubmit}
          ></SignupForm>
          <div className="my-5 flex items-center justify-between gap-2">
            <Separator className="basis-5/12"></Separator>
            <span>Or</span>
            <Separator className="basis-5/12"></Separator>
          </div>

          <Button className="w-full cursor-pointer" onClick={handleGoogleLogin} disable={googleLoading}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </span>
            Sign up with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

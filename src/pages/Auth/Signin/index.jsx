import Logo from "@/components/common/Logo";
import SigninForm from "@/components/Form/SigninForm";
import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router";
import useAuthContext from "@/hooks/useAuth.jsx";
import toast from "react-hot-toast";



const Signin = () => {
    const [loading, setLoading] = useState(false);
    const { signinUser } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const email = e.target.email.value;
            const password = e.target.password.value;
            await signinUser(email, password);
            e.target.reset();
            toast.success("Login Successful");
            navigate(location.state || "/");
        } catch (err) {
            console.error(err);
            toast.error(err?.message || "Something went wrong!!");
        } finally {
            setLoading(false);
        }
    };

    return (
    <div className="w-full h-full flex justify-center items-center p-10">
      <div className="max-w-xl w-full">
        <Link to="/">
          <Logo></Logo>
        </Link>
        <div className="mt-5">
          <h3 className="text-4xl font-semibold">Sign In</h3>
          <p className="text-lg text-neutral-700 mt-2">
            or don't have an account?
            <Link to="/auth/signup" className="text-blue-500 font-medium ms-1">
              Sign up
            </Link>
          </p>
        </div>
        <div className="">
          <SigninForm handleSubmit={handleSubmit} loading={loading}></SigninForm>
        </div>
      </div>
    </div>
  );
};

export default Signin;

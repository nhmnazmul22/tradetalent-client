import Logo from "@/components/common/Logo";
import SignupForm from "@/components/Form/SignupForm";
import React from "react";
import { Link } from "react-router";

const Signup = () => {
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
          <SignupForm></SignupForm>
        </div>
      </div>
    </div>
  );
};

export default Signup;

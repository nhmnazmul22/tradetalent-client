import Logo from "@/components/common/Logo";
import SigninForm from "@/components/Form/SigninForm";
import React from "react";
import { Link } from "react-router";

const Signin = () => {
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
          <SigninForm></SigninForm>
        </div>
      </div>
    </div>
  );
};

export default Signin;

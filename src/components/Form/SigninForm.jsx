import React from "react";
import Button from "../common/Button";
import InputBox from "../common/InputBox";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Link } from "react-router";

const SigninForm = () => {
  return (
    <form className="mt-5">
      <div className="mt-5 flex flex-col gap-4">
        <InputBox
          label="Email"
          isRequired={true}
          placeholder="Enter your email"
          type="email"
        />
        <InputBox
          label="Password"
          isRequired={true}
          placeholder="Enter your Password"
        />
        <Button variant="outline" className="mt-2">
          Signin
        </Button>
      </div>
    </form>
  );
};

export default SigninForm;

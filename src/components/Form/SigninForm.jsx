import React from "react";
import Button from "../common/Button";
import InputBox from "../common/InputBox";
import {Spinner} from "@/components/ui/spinner.jsx";
import {Separator} from "@/components/ui/separator.jsx";

const SigninForm = ({handleSubmit, loading}) => {
  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <div className="mt-5 flex flex-col gap-4">
        <InputBox
          label="Email"
          isRequired={true}
          placeholder="Enter your email"
          type="email"
          name={"email"}
        />
        <InputBox
          label="Password"
          isRequired={true}
          placeholder="Enter your Password"
          name={"password"}
        />
        <Button variant="outline" className="mt-2">
            {loading? <Spinner className={`size-4`}/> : "Signin"}
        </Button>

      </div>
    </form>
  );
};

export default SigninForm;

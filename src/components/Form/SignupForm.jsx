import React from "react";
import Button from "../common/Button";
import InputBox from "../common/InputBox";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Link } from "react-router";

const SignupForm = () => {
  return (
    <form className="mt-5">
      <div className="grid grid-cols-2 gap-5 ">
        <Button
          type="button"
          className="bg-gray-200 text-black rounded text-base hover:text-white"
        >
          Seller
        </Button>
        <Button
          type="button"
          className="bg-gray-200 text-black rounded text-base hover:text-white"
        >
          Buyer
        </Button>
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-5">
          <InputBox
            label="First Name"
            isRequired={true}
            placeholder="Enter your first name"
          />
          <InputBox
            label="Last Name"
            isRequired={false}
            placeholder="Enter your Last name"
          />
        </div>
        <InputBox
          label="Username"
          isRequired={true}
          placeholder="Enter your username"
        />
        <InputBox
          label="Email"
          isRequired={true}
          placeholder="Enter your email"
          type="email"
        />
        <InputBox
          label="Phone Number"
          isRequired={true}
          placeholder="Enter your phone number"
        />
        <InputBox
          label="Password"
          isRequired={true}
          placeholder="Enter your Password"
        />

        <div className="flex gap-2 items-center mt-2">
          <Checkbox></Checkbox>
          <Label>
            Accept the <Link>Terms</Link> and <Link>Privacy Policy</Link>
          </Label>
        </div>

        <Button variant="outline" className="mt-2">Signup</Button>
      </div>
    </form>
  );
};

export default SignupForm;

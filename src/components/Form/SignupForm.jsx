import React from "react";
import Button from "../common/Button";
import InputBox from "../common/InputBox";
import { Spinner } from "../ui/spinner";

const SignupForm = ({ loading, type, setType, handleSubmit }) => {
  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-5 ">
        <Button
          type="button"
          className={`${
            type === "seller"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black "
          } rounded text-base hover:text-white`}
          onClick={() => setType("seller")}
        >
          Seller
        </Button>
        <Button
          type="button"
          className={`${
            type === "buyer"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }  rounded text-base hover:text-white`}
          onClick={() => setType("buyer")}
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
            name="firstName"
            type="text"
          />
          <InputBox
            label="Last Name"
            isRequired={false}
            placeholder="Enter your Last name"
            name="lastName"
            type="text"
          />
        </div>
        <InputBox
          label="Photo URL"
          isRequired={false}
          placeholder="Enter your photo URL"
          name="photoURL"
          type="url"
        />
        <InputBox
          label="Username"
          isRequired={true}
          placeholder="Enter your username"
          name="username"
          type="text"
        />
        <InputBox
          label="Phone Number"
          isRequired={false}
          placeholder="Enter your phone number"
          type="tel"
          name="phone"
        />
        <InputBox
          label="Email"
          isRequired={true}
          placeholder="Enter your email"
          type="email"
          name="email"
        />
        <InputBox
          label="Password"
          isRequired={true}
          placeholder="Enter your Password"
          type="password"
          name="password"
        />

        <Button type="submit" variant="outline" className="mt-2">
          {loading ? (
            <span className="flex gap-2 items-center">
              <Spinner className="size-6" />
              <span className="ms-2">Creating...</span>
            </span>
          ) : (
            "Create Account"
          )}
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const validatePassword = (password) => {
  const isUpperCase = /^(?=.*[A-Z])/;
  const isLowerCase = /^(?=.*[a-z])/;
  if (!isUpperCase.test(password)) {
    return {
      success: false,
      message: "Must have an Uppercase letter in the password",
    };
  }

  if (!isLowerCase.test(password)) {
    return {
      success: false,
      message: "Must have a Lowercase letter in the password",
    };
  }

  if (password.length <= 6) {
    return {
      success: false,
      message: "Password length must be at least 6 character",
    };
  }

  return {
    success: true,
    message: "Password valid",
  };
};

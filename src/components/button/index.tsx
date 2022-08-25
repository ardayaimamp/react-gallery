import React from "react";
import "./index.css";

type Props = {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  variant?: "primary";
};

export default function index({
  children,
  type = "button",
  variant = "primary",
}: Props) {
  return (
    <button
      type={type}
      className={`button-${variant} block w-full mt-5 py-2 rounded-2xl hover:-translate-y-1 transition-all duration-500 font-semibold mb-2`}
    >
      {children}
    </button>
  );
}

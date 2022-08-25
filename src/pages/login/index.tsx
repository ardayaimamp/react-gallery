import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/button";
import Link from "@/components/link";
import Input from "@/components/input";
import LockIcon from "@/assets/icons/lock";
import SignIcon from "@/assets/icons/sign";
import "./index.css";

export default function Login() {
  const navigate = useNavigate();
  const onSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const email: string = e.target.email.value;
    const password: string = e.target.password.value;

    if (email === "user@react.test" && password === "password") {
      alert("welcome");
      navigate("dashboard");
    } else {
      alert("login failed");
      e.target.reset();
    }
  };

  return (
    <div className="h-screen flex">
      {/* START: Left Side */}
      <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center">
        <div className=" bg-black opacity-20 inset-0 z-0"></div>
        <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 className="text-white font-bold text-4xl font-sans">
            React Gallery
          </h1>
          <p className="text-white mt-1">
            Post your amazing shot here, let everybody knows that!
          </p>
        </div>
      </div>
      {/* END: Left Side */}
      {/* START: Login Form */}
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <form
            className="bg-white rounded-md shadow-2xl p-5"
            onSubmit={onSubmit}
          >
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-8">
              email: <span className="font-bold">user@react.test</span>,
              password: <span className="font-bold">password</span>
            </p>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              iconLeft={<SignIcon />}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              iconLeft={<LockIcon />}
            />
            <Button type="submit">Login</Button>
            <div className="flex justify-between mt-4">
              <Link>Forgot Password ?</Link>
              <Link>Don't have an account yet?</Link>
            </div>
          </form>
        </div>
      </div>
      {/* END: Login Form */}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

type Props = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

export default function index({ href = "#", className, children }: Props) {
  return (
    <Link
      to={href}
      className={`text-sm ml-2 cursor-pointer hover:-translate-y-1 duration-500 transition-all ${className}`}
    >
      {children}
    </Link>
  );
}

"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "danger" | "success";
};

export default function Button({ children, variant = "primary" }: Props) {
  const base = "px-4 py-2 rounded-lg font-medium";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
  };
  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
}

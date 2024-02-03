import LoginForm from "@/components/login/LoginForm";
import React from "react";

export default function page() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white dark:bg-[#271d1d] rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-offWhite">
          Login
        </h2>
        <p className="text-gray-700 mb-6 dark:text-gray-400 text-sm">
          Welcome back! Please login to your account.
        </p>
        <LoginForm />
      </div>
    </div>
  );
}

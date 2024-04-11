"use client";

import { dashboardRoutes } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/v1/user/logout", {
        method: "DELETE",
        credentials: "include",
      });

      if (res.ok) {
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content grid grid-rows-[70px_1fr]">
        {/* Page content here */}
        <div className="flex h-full justify-between items-center p-5 bg-base-100">
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <CiMenuBurger className="text-xl" />
          </label>
          <Link href={"/dashboard"} className="uppercase font-bold">
            Dashboard
          </Link>
          <div className="dropdown dropdown-end">
            <BsThreeDotsVertical tabIndex={0} role="button" className="m-1" />
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow-md bg-base-200 rounded-md w-32"
            >
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full px-5 md:px-10 py-5">{children}</div>
      </div>
      <div className="drawer-side h-full overflow-hidden">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-col bg-base-200 h-full">
          <p className="font-bold md:text-xl text-base my-5 mx-8">Pages</p>
          <ul className="menu p-4 w-56 md:w-80 min-h-full  text-black dark:text-base-content flex-grow">
            {dashboardRoutes.map((props, index) => (
              <li key={index}>
                <Link
                  href={props.link}
                  className="text-black font-bold dark:text-gray-200 "
                >
                  {props.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

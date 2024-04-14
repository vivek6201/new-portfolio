"use client";
import React, { useRef } from "react";
import { ModeToggle } from "../toggle";
import { CiMenuFries } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  const pages = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Projects",
      route: "/projects",
    },
    {
      name: "Skills",
      route: "/skills",
    },
    {
      name: "Education",
      route: "/education",
    },
    {
      name: "Experience",
      route: "/experience",
    },
    {
      name: "Blogs",
      route: "/blogs",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];

  return (
    <div className="dark:bg-[#FCF5ED] rounded-full p-3 max-w-[1350px] w-11/12 mx-auto bg-richBlack h-14 md:h-20 flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-offWhite dark:bg-primaryBg w-10 h-10 md:w-16 md:h-16 flex justify-center items-center">
            <p className="md:text-2xl font-bold text-richBlack font-pacifico">
              VG
            </p>
          </div>
          <p className="text-[#FCF5ED] dark:text-richBlack text-xl uppercase hidden md:block">
            Vivek<span className="font-extrabold">Gupta</span>
          </p>
        </div>
      </Link>
      <div className="flex gap-2">
        <div className="rounded-full p-1 md:p-4 dark:bg-richBlack bg-[#FCF5ED] hover:bg-gray-100 cursor-pointer">
          <ModeToggle />
        </div>
        <div className="rounded-full  dark:md:bg-richBlack md:bg-[#FCF5ED] flex gap-2 items-center">
          <p className="font-medium hidden md:block ml-5 mr-2 text-xl">Menu</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="rounded-full outline-none bg-primaryBg h-11 flex justify-center items-center w-11 md:w-[4.2rem] md:h-[4.2rem] cursor-pointer hover:bg-yellow-200">
                <CiMenuFries className="text-xl md:text-3xl text-black outline-none" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="dark:bg-richBlack bg-primaryBg"
            >
              <DropdownMenuLabel>Navigations</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {pages.map((item): React.ReactNode => {
                return (
                  <Link href={item.route} key={item.route}>
                    <DropdownMenuItem>{item.name}</DropdownMenuItem>
                  </Link>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

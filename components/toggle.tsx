"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { FaSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

export function ModeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();

  return theme === "light" || systemTheme === "light" ? (
    <Button variant={"ghost"} onClick={() => setTheme("dark")} size={"icon"}>
      <FaSun className="text-xl md:text-2xl text-black"/>
    </Button>
  ) : (
    <Button variant={"ghost"} onClick={() => setTheme("light")} size={"icon"}>
      <IoMdMoon className="text-xl md:text-2xl dark:text-white"/>
    </Button>
  );
}

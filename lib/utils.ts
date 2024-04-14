import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dashboardRoutes = [
  {
    name: "Projects",
    link: "/dashboard/projects",
  },
  {
    name: "Experience",
    link: "/dashboard/experience",
  },
  {
    name: "About",
    link: "/dashboard/about",
  },
  {
    name: "Skills",
    link: "/dashboard/skills",
  },
  {
    name: "Education",
    link: "/dashboard/education",
  },
];

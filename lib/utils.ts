import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { jwtVerify } from "jose";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const verifyToken = async (token: string) => {
  try {
    const secret = process.env.JWT_SECRET!;
    const verifiedToken = await jwtVerify(
      token,
      new TextEncoder().encode(secret)
    );
    return verifiedToken;
  } catch (error) {
    console.log(error);
  }
};

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

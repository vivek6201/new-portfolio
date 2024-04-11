import NextBreadcrumb from "@/components/Common/Breadcrums";
import DashboardLayout from "@/components/Common/DashboardLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard - Vivek Kumar Gupta",
  description: "Admin Dashboard to edit data",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      <NextBreadcrumb
        homeElement={"Home"}
        separator={<span className="text-sm">/</span>}
        activeClasses="text-amber-500 text-sm"
        containerClasses="flex py-5"
        listClasses="flex item-center justify-center hover:underline mx-1 opacity-70 text-sm"
        capitalizeLinks
      />
      {children}
    </DashboardLayout>
  );
}

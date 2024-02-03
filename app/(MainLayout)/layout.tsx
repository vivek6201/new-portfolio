import Navbar from "@/components/Common/Navbar";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-10 min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}

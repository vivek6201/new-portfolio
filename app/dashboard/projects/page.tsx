"use client";
import ProjectForm from "@/components/dashboardForms/ProjectForm";
import React from "react";

export default function page() {
  return (
    <div>
      <p className="text-xl font-semibold uppercase">Projects</p>
      <ProjectForm />
    </div>
  );
}

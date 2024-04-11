import SkillsForm from "@/components/dashboardForms/SkillsForm";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-y-5">
      <p className="text-xl font-semibold uppercase">Skills</p>

      <SkillsForm />
    </div>
  );
}

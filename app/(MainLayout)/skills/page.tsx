import CustomButton from "@/components/Common/CustomButton";
import PageTitle from "@/components/small-elements/PageTitle";
import SkillChip from "@/components/small-elements/SkillChip";
import { urlFor } from "@/sanity/sanity.client";
import { getSkills } from "@/sanity/sanity.query";
import { SkillType } from "@/types";
import React from "react";
import { FiDownload } from "react-icons/fi";

export default async function Projects() {
  const skills = await getSkills();

  return (
    <div className="py-10 min-h-[800px] flex flex-col max-w-[1350px] w-10/12 mx-auto">
      <PageTitle title="Skills" />

      <div className="flex flex-col gap-5 ">
        <div className="flex gap-5 flex-col pt-5">
          <p className="text-richBlack dark:text-primaryBg font-bold font-ubuntu text-center capitalize text-3xl md:text-5xl">
            Design tools i use
          </p>
          <div className="flex gap-5 flex-wrap items-center justify-center mt-5">
          {skills.map(
              (skill: SkillType) =>
                skill.toolType === "Design" && (
                  <SkillChip
                    imageName={urlFor(skill.image).url()}
                    skillName={skill.title}
                    key={skill._id}
                  />
                )
            )}
          </div>
        </div>
        <div className="flex gap-5 flex-col pt-5">
          <p className="text-richBlack dark:text-primaryBg font-bold font-ubuntu text-center capitalize text-3xl md:text-5xl">
            Technologies I Use
          </p>
          <div className="flex gap-5 flex-wrap items-center justify-center mt-5">
            {skills.map(
              (skill: SkillType) =>
                skill.toolType === "Technologies" && (
                  <SkillChip
                    imageName={urlFor(skill.image).url()}
                    skillName={skill.title}
                    key={skill._id}
                  />
                )
            )}
          </div>
        </div>
        <div className="flex gap-5 flex-col pt-5">
          <p className="text-richBlack dark:text-primaryBg font-bold font-ubuntu text-center capitalize text-3xl md:text-5xl">
            Development & Productivity Tools I Use
          </p>
          <div className="flex gap-5 flex-wrap items-center justify-center mt-5">
            {skills.map(
              (skill: SkillType) =>
                skill.toolType === "Productivity" && (
                  <SkillChip
                    imageName={urlFor(skill.image).url()}
                    skillName={skill.title}
                    key={skill._id}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import ExperienceCard from "@/components/ExperiencePage/ExperienceCard";
import PageTitle from "@/components/small-elements/PageTitle";
import { getExperience } from "@/sanity/sanity.query";
import { ExperienceType } from "@/types";
import React from "react";

export default async function Experience() {
  const experienceData = await getExperience();

  return (
    <div className="flex flex-col max-w-[1350px] mx-auto w-10/12 my-12">
      <PageTitle title="Experience" />
      <div>
        {experienceData.map((experience: ExperienceType) => {
          return <ExperienceCard {...experience} key={experience._id} />;
        })}
      </div>
    </div>
  );
}

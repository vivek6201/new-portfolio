import EducationCard from "@/components/EducationPage/EducationCard";
import PageTitle from "@/components/small-elements/PageTitle";
import { getEducations } from "@/sanity/sanity.query";
import { EducationType } from "@/types";
import React from "react";

export default async function Education() {
  const educationData = await getEducations();

  return (
    <div className="flex flex-col max-w-[1350px] mx-auto w-10/12 my-12">
      <PageTitle title="Education" />
      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-5">
        {educationData.map((education:EducationType) => {
          return <EducationCard {...education} key={education.degreetype} />;
        })}
      </div>
    </div>
  );
}

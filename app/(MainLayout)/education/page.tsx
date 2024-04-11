import EducationCard from "@/components/EducationPage/EducationCard";
import PageTitle from "@/components/small-elements/PageTitle";
import React from "react";

export default function Education() {
  const educationData = [
    {
      instituteName: "Netaji Subhash Engineering College",
      location: "Kolkata, West Bengal",
      startDate: "2019",
      endDate: "2022",
      degree: "Bachelor of Computer Applications",
      EducationType: "Graduation",
      degreeType: "Bachelors",
    },
    {
      instituteName: "Arka Jain University",
      location: "Jamshedpur, Jharkhand",
      startDate: "2023",
      endDate: "2025",
      degree: "Masters of Computer Applications",
      EducationType: "Post Graduation",
      degreeType: "Masters",
    },
  ];

  return (
    <div className="flex flex-col max-w-[1350px] mx-auto w-10/12 my-12">
      <PageTitle title="Education" />
      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-5">
        {educationData.map((education) => {
          return <EducationCard {...education} key={education.degreeType}/>;
        })}
      </div>
    </div>
  );
}

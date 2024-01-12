import ExperienceCard from "@/components/ExperiencePage/ExperienceCard";
import PageTitle from "@/components/small-elements/PageTitle";
import React from "react";

const experienceData = [
  {
    companyName: "Dirums Collective Pvt. Ltd.",
    companyLocation: "Jamshedpur,Jharkhand",
    startDate: "June 2023",
    endDate: "October 2023",
    role: "Frontend Developer",
    workData: [
      "Build a fully functional Admin Dashboard, implementing industry standards best practices",
      "Optimized Customer website performance",
      "Increased web traffic and content engagement by 30%",
      "Customized and modified website for different screen to enhance user experience",
    ],
    compamnyLogo: "",
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col max-w-[1350px] mx-auto w-10/12 my-12">
      <PageTitle title="Experience" />
      <div>
        {experienceData.map((experience, index) => {
          return <ExperienceCard {...experience} key={index} />;
        })}
      </div>
    </div>
  );
}

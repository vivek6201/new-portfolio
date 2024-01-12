import ProjectCard from "@/components/ProjectPage/ProjectCard";
import PageTitle from "@/components/small-elements/PageTitle";
import React from "react";

const projectData = [
  {
    projectTitle: "string",
    deployedLink: "string",
    githubLink: "string",
    image: "https://google.com",
    projectData: [],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col max-w-[1350px] mx-auto w-10/12 my-12">
      <PageTitle title="Projects" />
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 my-10 place-items-center">
        {projectData.map((data, index) => (
          <ProjectCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
}

import ProjectCard from "@/components/ProjectPage/ProjectCard";
import PageTitle from "@/components/small-elements/PageTitle";
import { getProjects } from "@/sanity/sanity.query";
import { ProjectType } from "@/types";
import React from "react";

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();

  return (
    <div className="flex flex-col max-w-[1350px] mx-auto w-10/12 my-12">
      <PageTitle title="Projects" />
      <div className="gap-5 md:gap-10 my-10 place-items-center">
        {projects.map((project) => (
          <ProjectCard {...project} key={project._id} />
        ))}
      </div>
    </div>
  );
}

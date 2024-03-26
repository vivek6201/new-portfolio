import ProjectCard from "@/components/ProjectPage/ProjectCard";
import PageTitle from "@/components/small-elements/PageTitle";
import { apiToken, backendUrl } from "@/lib/utils";
import axios from "axios";
import React from "react";

const getData = async () =>{
  const {data} = await axios.get(`${backendUrl}/api/projects?populate=skills`,{
    headers:{
      Authorization:`Bearer ${apiToken}`
    }
  })
  console.log({data})
  return data;
}

export default async function Projects() {

  const {data:projectData} = await getData();

  
  return (
    <div className="flex flex-col max-w-[1350px] mx-auto w-10/12 my-12">
      <PageTitle title="Projects" />
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 my-10 place-items-center">
        {projectData.map(({attributes, id}) => (
          <ProjectCard {...attributes} key={id} />
        ))}
      </div>
    </div>
  );
}

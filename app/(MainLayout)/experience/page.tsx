import ExperienceCard from "@/components/ExperiencePage/ExperienceCard";
import PageTitle from "@/components/small-elements/PageTitle";
import { apiToken, backendUrl } from "@/lib/utils";
import axios from "axios";
import React from "react";

const getData = async () =>{
  const {data} = await axios.get(`${backendUrl}/api/experiences`,{
    headers:{
      Authorization: `Bearer ${apiToken}`
    }
  });
  return data;
}

export default async function Experience() {

  const {data} = await getData();
  console.log(data)

  return (
    <div className="flex flex-col max-w-[1350px] mx-auto w-10/12 my-12">
      <PageTitle title="Experience" />
      <div>
        {data.map(({id,attributes}:{attributes:any,id:string}) => {
          return <ExperienceCard {...attributes} key={id} />;
        })}
      </div>
    </div>
  );
}

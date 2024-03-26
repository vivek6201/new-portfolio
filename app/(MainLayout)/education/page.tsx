import EducationCard from "@/components/EducationPage/EducationCard";
import PageTitle from "@/components/small-elements/PageTitle";
import { apiToken, backendUrl } from "@/lib/utils";
import axios from "axios";
import React from "react";

const getData = async () =>{
  const {data} = await axios.get(`${backendUrl}/api/educations`,{
    headers:{
      Authorization: `Bearer ${apiToken}`
    }
  });
  return data;
}
export default async function Education() {
  
  const {data} = await getData();

  return (
    <div className="flex flex-col max-w-[1350px] mx-auto w-10/12 my-12">
      <PageTitle title="Education" />
      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-5">
        {data.map(({attributes,id}:{attributes:any,id:string}) => {
          return <EducationCard {...attributes} key={id}/>;
        })}
      </div>
    </div>
  );
}

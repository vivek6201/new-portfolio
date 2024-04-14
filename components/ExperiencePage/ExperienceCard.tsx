import React from "react";
import { Calendar } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import { CiPaperplane } from "react-icons/ci";
import { urlFor } from "@/sanity/sanity.client";
import { ExperienceType } from "@/types";

export default function ExperienceCard(props: ExperienceType) {
  return (
    <div className="relative w-full">
      <div className="flex flex-col justify-evenly rounded-3xl px-5 md:px-10 py-5 min-h-[300px] w-full md:min-h-[350px] bg-richBlack dark:bg-offWhite bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 dark:bg-opacity-80 backdrop-blur-md my-5 md:my-10 transition-all duration-300 group">
        <div className="flex justify-between flex-col md:flex-row gap-3 items-start md:items-center w-full">
          <div className="flex items-center gap-5 justify-between bg-offWhite dark:bg-richBlack pr-5 rounded-full">
            <Image
              alt="companyLogo"
              src={urlFor(props.companyLogo).url()}
              width={100}
              height={100}
              className="rounded-full w-20 h-14 object-contain"
            />
            <div className="flex flex-col gap-y-2 py-2">
              <p className="text-black dark:text-primaryBg text-lg font-bold">
                {props.companyName}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <IoLocationOutline />
                <p>{props.companyLocation}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 group-hover:bg-primaryBg transition-all duration-300 bg-offWhite dark:bg-richBlack text-black dark:text-offWhite px-5 py-2 rounded-full">
            <Calendar
              size={24}
              fontWeight={700}
              className="group-hover:text-richBlack transition-all duration-300"
            />
            <p className="font-bold group-hover:text-richBlack transition-all duration-300">
              {props.startDate} - {props.endDate}
            </p>
          </div>
        </div>
        <p className=" text-white dark:text-richBlack text-2xl mt-8 mb-5 ml-5 font-extrabold self-start">
          {props.role}
        </p>
        <div className="flex flex-col gap-2 my-5">
          <div className="flex flex-col px-2 font-bold gap-5">
            {props.workData.map((data, index) => (
              <p
                className="text-white align-middle dark:text-richBlack font-medium text-base md:text-lg"
                key={index}
              >
                <span className="mr-2 inline-block align-middle">
                  <CiPaperplane />
                </span>{" "}
                {data}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-36 h-36 bg-yellow-400 top-[50%] left-[50%] absolute rounded-full -translate-x-[50%] -translate-y-[50%] -z-10" />
    </div>
  );
}

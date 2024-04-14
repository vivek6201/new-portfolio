import React from "react";
import { Calendar } from "lucide-react";
import { FcGraduationCap } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdSchool } from "react-icons/io";
import { EducationType } from "@/types";

export default function EducationCard(props: EducationType) {
  return (
    <div className="relative">
      <div className="flex flex-col justify-evenly rounded-3xl px-5 md:px-10 py-5 min-h-[300px] md:min-h-[350px] bg-richBlack dark:bg-offWhite bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 dark:bg-opacity-80 backdrop-blur-md my-5 md:my-10 transition-all duration-300 group">
        <div className="flex justify-between flex-col md:flex-row gap-3 items-start md:items-center w-full">
          <div className="flex items-center gap-5 bg-offWhite dark:bg-richBlack text-black dark:text-offWhite px-5 py-2 rounded-full">
            <Calendar size={24} fontWeight={700} />
            <p className="font-bold">
              {props.startDate} - {props.endDate}
            </p>
          </div>
          <div className="flex items-center gap-5 justify-center bg-offWhite dark:bg-richBlack px-5 py-2 rounded-full group-hover:bg-primaryBg transition-all duration-300">
            <FcGraduationCap size={24} />
            <p className="text-black dark:text-offWhite font-bold group-hover:text-richBlack transition-all duration-300">
              {props.educationType}
            </p>
          </div>
        </div>
        <p className="bg-richBlack dark:bg-white text-white dark:text-richBlack px-5 py-2 rounded-full my-5 font-bold self-start group-hover:bg-primaryBg transition-all duration-300">
          {props.degreetype}
        </p>
        <p className="font-extrabold text-white dark:text-richBlack text-xl md:text-2xl">
          {props.degree}
        </p>
        <div className="flex flex-col gap-2 my-5">
          <div className="flex items-center font-bold gap-5">
            <IoMdSchool className="text-white dark:text-richBlack text-2xl md:text-3xl" />
            <p className="text-white dark:text-richBlack font-medium text-base md:text-lg">
              {props.instituteName}
            </p>
          </div>
          <div className="flex items-center font-bold gap-5">
            <IoLocationOutline className="text-white dark:text-richBlack text-2xl md:text-3xl" />
            <p className="text-white dark:text-richBlack font-medium text-base md:text-lg">
              {props.location}
            </p>
          </div>
        </div>
      </div>
      <div className="w-36 h-36 bg-yellow-400 top-[50%] left-[50%] absolute rounded-full -translate-x-[50%] -translate-y-[50%] -z-10" />
    </div>
  );
}

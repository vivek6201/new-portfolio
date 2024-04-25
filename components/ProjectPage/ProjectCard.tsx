"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { BsInfoCircle } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { urlFor } from "@/sanity/sanity.client";
import { ProjectType, SkillType } from "@/types";

function SkillChip({ item }: { item: SkillType }) {
  return (
    <div className="rounded-full px-4 py-1 bg-slate-200 dark:bg-zinc-700">
      <p className="dark:text-white text-xs text-zinc-800">{item.title}</p>
    </div>
  );
}

export default function ProjectCard(props: ProjectType) {
  return (
    <div className="group grid gap-5 lg:grid-cols-2 w-full h-full bg-richBlack dark:bg-offWhite bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 dark:bg-opacity-80 backdrop-blur-md my-5 md:my-10 transition-all duration-300 group rounded-xl p-5 relative">
      <div className="flex flex-col justify-center items-center rounded-t-xl">
        <Image
          width={500}
          height={200}
          className="w-full items-center justify-center object-cover rounded-lg"
          src={urlFor(props.projectThumbnail).url()}
          alt="thumbnail"
        />
      </div>
      <div>
        <div className="py-4 md:py-6">
          <h3 className="text-2xl font-bold text-primaryBg dark:text-richBlack">
            {props.projectTitle}
          </h3>
          <div className="flex gap-2 flex-wrap my-5">
            {props.skills.map((item, index) => (
              <SkillChip key={index} item={item} />
            ))}
          </div>
          <ul className="md:px-2 md:py-2">
            {props.projectData.map((data, index) => (
              <li
                className="mt-3 text-offWhite dark:text-richBlack "
                key={index}
              >
                {data}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-5">
          {props.deployedLink !== "" && props.deployedLink && (
            <Link
              className="w-full font-semibold text-primaryBg ring-1 ring-primaryBg group-hover:bg-gray-500 group-hover:text-black rounded-full text-center dark:ring-richBlack dark:ring-1 dark:group-hover:ring-primaryBg dark:group-hover:bg-primaryBg dark:text-black dark:group-hover:text-white py-2 transition-all duration-200"
              href={props.deployedLink ?? ""}
              target="_blank"
            >
              Go to Project
            </Link>
          )}

          <Link
            className="w-full font-semibold text-primaryBg ring-1 ring-primaryBg group-hover:bg-primaryBg group-hover:text-richBlack dark:ring-richBlack dark:ring-1 dark:group-hover:ring-primaryBg rounded-full text-center dark:group-hover:bg-primaryBg dark:text-black dark:group-hover:text-white py-2 transition-all duration-200"
            href={props.githubLink ?? ""}
          >
            View Source
          </Link>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={"link"}
                size={"icon"}
                className="absolute top-5 right-5 dark:text-black text-white rounded-full"
                onClick={() => {}}
              >
                <BsInfoCircle className="text-3xl" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm md:text-base font-bold">Project Details</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

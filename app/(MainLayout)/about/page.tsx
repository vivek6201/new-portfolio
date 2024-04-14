import PageTitle from "@/components/small-elements/PageTitle";
import ThemeChip from "@/components/small-elements/ThemeChip";
import { urlFor } from "@/sanity/sanity.client";
import { getUser } from "@/sanity/sanity.query";
import { UserType } from "@/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";

export default async function About() {
  const user: UserType = await getUser();

  return (
    <div className="pt-10 min-h-[800px] flex flex-col max-w-[1350px] w-10/12 mx-auto">
      <PageTitle title="About Me" />

      <div className="grid grid-cols-1 xl:grid-cols-2 min-h-[300px] my-10 gap-5">
        <div>
          <div className="flex gap-5 items-center">
            <div className="rounded-full border border-richBlack dark:border-primaryBg flex items-center justify-center w-16 h-16 p-1">
              <Image
                width={200}
                height={200}
                src={urlFor(user.profileImage).url()}
                alt="my photo"
                className="w-14 h-14 rounded-full"
              />
            </div>
            <p className="font-extrabold text-4xl text-richBlack dark:text-primaryBg tracking-wider">
              I Love
            </p>
          </div>
          <div className="flex gap-5 flex-wrap items-center mt-10">
            <ThemeChip
              skillName="Listening to Music"
              imageName="/headphone.png"
              textClass="text-green-400"
            />
            <ThemeChip
              skillName="Driving Cars"
              imageName="/cars.webp"
              textClass="dark:text-red-600 text-red-400"
            />
            <ThemeChip
              skillName="Mountains"
              imageName="/mountains.svg"
              textClass="text-green-600"
            />
            <ThemeChip
              skillName="Coding"
              imageName="/coding.png"
              textClass="dark:text-blue-400 text-slate-400"
            />
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="dark:bg-[#271d1d] aspect-square w-52 md:w-60 lg:w-72 p-5 bg-primaryBg rounded-[2.5rem] flex items-center justify-center flex-col gap-4">
            <p className="font-extrabold text-transparent text-4xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-b from-richBlack dark:from-primaryBg to-transparent">
              1+
            </p>
            <p className="font-extrabold text-lg md:text-2xl lg:text-3xl text-center tracking-wider">
              Years of Hands on Experience
            </p>
          </div>
          <div className="dark:bg-[#271d1d] aspect-square w-52 md:w-60 lg:w-72 p-5 bg-primaryBg rounded-[2.5rem] flex items-center justify-center flex-col gap-4">
            <p className="font-extrabold text-transparent text-4xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-b from-richBlack dark:from-primaryBg to-transparent">
              10+
            </p>
            <p className="font-extrabold text-lg md:text-2xl lg:text-3xl text-center tracking-wider">
              Projects Completed
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 md:p-10 rounded-3xl bg-primaryBg dark:bg-[#271d1d] leading-loose">
        <PortableText value={user.about} />
      </div>
    </div>
  );
}

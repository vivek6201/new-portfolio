import Image from "next/image";
import React from "react";

type Prop = {
  skillName: string;
  imageName: string;
  textClass?: string;
};

export default function ThemeChip({ skillName, imageName,textClass }: Prop) {
  return (
    <div
      className={`flex gap-2 md:gap-4 items-center px-5 py-3 bg-richBlack bg-opacity-70 backdrop-blur-sm dark:bg-offWhite shadow-md rounded-full`}
    >
      <Image
        src={imageName}
        width={100}
        height={100}
        className="rounded-full w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 object-cover"
        alt="logo"
      />
      <p className={`${textClass} text-lg md:text-xl lg:text-2xl mr-2 font-bold`}>
        {skillName}
      </p>
    </div>
  );
}

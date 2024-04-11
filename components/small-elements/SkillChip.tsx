import Image from "next/image";
import React from "react";

type Prop = {
  skillName: string;
  imageName: string;
  positions?: string;
};

export default function SkillChip({ skillName, imageName, positions }: Prop) {
  return (
    <div
      className={`${positions} flex gap-1 md:gap-2 items-center p-1 lg:p-2 bg-richBlack bg-opacity-70 backdrop-blur-sm dark:bg-offWhite shadow-md rounded-full`}
    >
      <Image
        src={imageName}
        width={100}
        height={100}
        className="rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-cover"
        alt="logo"
      />
      <p className="dark:text-[#1F1717] text-offWhite text-xs sm:text-sm md:text-xl lg:text-2xl mr-2 font-medium">
        {skillName}
      </p>
    </div>
  );
}

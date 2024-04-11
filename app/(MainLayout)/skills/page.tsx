import CustomButton from "@/components/Common/CustomButton";
import PageTitle from "@/components/small-elements/PageTitle";
import SkillChip from "@/components/small-elements/SkillChip";
import React from "react";
import { FiDownload } from "react-icons/fi";

export default function Projects() {
  const techSkills = [
    {
      skillName: "HTML",
      imageName: "/html-logo.webp",
    },
    {
      skillName: "CSS",
      imageName: "/css-logo.webp",
    },
    {
      skillName: "Javascript",
      imageName: "/js-logo.svg",
    },
    {
      skillName: "ReactJS",
      imageName: "/react-logo.svg",
    },
    {
      skillName: "NextJS",
      imageName: "/next-logo.svg",
    },
    {
      skillName: "Redux Toolkit",
      imageName: "/redux-logo.png",
    },
    {
      skillName: "TailwindCSS",
      imageName: "/twcss-logo.svg",
    },
    {
      skillName: "ChakraUI",
      imageName: "/chakra-logo.png",
    },
    {
      skillName: "ShadcnUI",
      imageName: "/shadcn-logo.png",
    },
    {
      skillName: "NextUI",
      imageName: "/next-ui-logo.png",
    },
    {
      skillName: "MaterialUI",
      imageName: "/material-logo.png",
    },
    {
      skillName: "AntDesign",
      imageName: "/ant-logo.png",
    },
    {
      skillName: "Bootstrap",
      imageName: "/bootstrap-logo.png",
    },
    {
      skillName: "C++",
      imageName: "/cpp.png",
    },
    {
      skillName: "Java",
      imageName: "/java-logo.png",
    },
    {
      skillName: "Python",
      imageName: "/python-logo.png",
    },
    {
      skillName: "NodeJS",
      imageName: "/node-logo.png",
    },
    {
      skillName: "React Query",
      imageName: "/react-query-logo.png",
    },
    {
      skillName: "React Hook Forms",
      imageName: "/react-forms-logo.png",
    },
    {
      skillName: "MongoDB",
      imageName: "/mongo-logo.png",
    },
  ];

  const productivityTools = [
    {
      toolName: "Visual Studio Code",
      imageName: "/vs-code-logo.jpg",
    },
    {
      toolName: "Notion",
      imageName: "/notion-logo.png",
    },
    {
      toolName: "Github",
      imageName: "/github-logo.png",
    },
    {
      toolName: "Postman",
      imageName: "/postman-logo.webp",
    },
  ];

  return (
    <div className="py-10 min-h-[800px] flex flex-col max-w-[1350px] w-10/12 mx-auto">
      <PageTitle title="Skills" />

      <div className="flex flex-col gap-5 ">
        <div className="flex gap-5 flex-col pt-5">
          <p className="text-richBlack dark:text-primaryBg font-bold font-ubuntu text-center capitalize text-3xl md:text-5xl">
            Design tools i use
          </p>
          <div className="flex gap-5 flex-wrap items-center justify-center mt-5">
            <SkillChip imageName="/figma-logo.jpg" skillName="Figma" />
            <SkillChip imageName="/canva-logo.png" skillName="Canva" />
          </div>
        </div>
        <div className="flex gap-5 flex-col pt-5">
          <p className="text-richBlack dark:text-primaryBg font-bold font-ubuntu text-center capitalize text-3xl md:text-5xl">
            Technologies I Use
          </p>
          <div className="flex gap-5 flex-wrap items-center justify-center mt-5">
            {techSkills.map((skill) => (
              <SkillChip
                imageName={skill.imageName}
                skillName={skill.skillName}
                key={skill.skillName}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-5 flex-col pt-5">
          <p className="text-richBlack dark:text-primaryBg font-bold font-ubuntu text-center capitalize text-3xl md:text-5xl">
            Development & Productivity Tools I Use
          </p>
          <div className="flex gap-5 flex-wrap items-center justify-center mt-5">
            {productivityTools.map((tool) => (
              <SkillChip
                imageName={tool.imageName}
                skillName={tool.toolName}
                key={tool.toolName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

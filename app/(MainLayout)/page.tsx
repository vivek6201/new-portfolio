import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import SkillChip from "@/components/small-elements/SkillChip";
import Link from "next/link";
import { UserType } from "@/types";
import { getUser } from "@/sanity/sanity.query";

export default async function Home() {
  const user: UserType = await getUser();

  return (
    <div className="overflow-hidden">
      <div
        className={`flex flex-col items-center min-h-[800px] max-w-[1350px] w-10/12 mx-auto pt-10 md:pt-20`}
      >
        <div>
          <p className="font-ubuntu font-extrabold text-4xl md:text-5xl lg:text-6xl mt-10 text-center">
            Hello! I&apos;m <span className="text-[#CE5A67]">{user.fullName}</span>
          </p>
        </div>
        <p className="mt-4 text-2xl md:text-3xl text-center text-ellipsis max-w-xl">
          A <span className="font-bold">{user.role}</span>
        </p>

        <div className="flex gap-3 md:gap-5 items-center justify-center my-10">
          <a
            href={"/resume.pdf"}
            download
            className="border rounded-full flex items-center transition-colors duration-200 gap-2 px-4 md:px-5 py-1 md:py-2 border-[#CE5A67] hover:bg-[#CE5A67] hover:text-offWhite"
          >
            <FiDownload />
            Resume
          </a>
          <Link
            href={"/contact"}
            className="border rounded-full flex items-center gap-2 px-4 md:px-5 py-1 md:py-2 transition-colors duration-200 bg-[#CE5A67] hover:bg-[#CE5A67] text-white hover:text-white"
          >
            Hire Me
          </Link>
        </div>

        <div className="flex gap-2 md:gap-4 items-center">
          {
            user.socials.map((social) =>(
              <div className="rounded-full cursor-pointer bg-[#ce5ab1] hover:bg-[#CE5A67] text-white px-4 py-1" key={social.title}>
                <Link href={social.url} target="_blank" className="text-sm font-medium">{social.title}</Link>
              </div>
            ))
          }
        </div>

        <div className="w-full h-[350px] mt-12 flex justify-center items-center relative z-10">
          <Image
            width={400}
            height={400}
            alt="hero"
            src={"/hero-illustration.png"}
            className="z-[1] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
          />
          <div className="w-[200px] h-[200px] backdrop-blur-sm opacity-70 md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-b from-[#F0DBAF] to-transparent absolute bottom-5 md:translate-y-8 " />

          <SkillChip
            imageName="/next-logo.svg"
            skillName="Next Js"
            positions="absolute top-10 left-[10%] sm:left-[22%] md:left-[25%]"
          />
          <SkillChip
            imageName="/react-logo.svg"
            skillName="React Js"
            positions="absolute top-30 left-1 sm:left-[10%] md:left-[20%] z-10"
          />
          <SkillChip
            imageName="/js-logo.svg"
            skillName="Javascript"
            positions="absolute top-[17rem] left-2 sm:left-[22%] md:left-[24%] z-10"
          />
          <SkillChip
            imageName="/twcss-logo.svg"
            skillName="TailwindCss"
            positions="absolute top-10 right-8 sm:right-[22%] md:right-[24%] z-10"
          />
          <SkillChip
            imageName="/cpp.png"
            skillName="C++"
            positions="absolute top-30 right-1 sm:right-[15%] md:right-[20%] z-10"
          />
          <SkillChip
            imageName="/java-logo.png"
            skillName="Java"
            positions="absolute top-[17rem] right-5 sm:right-[22%] md:right-[24%] z-10"
          />
        </div>
      </div>
    </div>
  );
}

import { PortableTextBlock } from "sanity";

export type UserType = {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  profileImage: {
    alt: string;
    image: string;
  };
  about: PortableTextBlock[];
  socials: {
    _id: string;
    title: string;
    url: string;
  }[];
};

export type EducationType = {
  _id: string;
  location: string;
  degreetype: string;
  _createdAt: string;
  instituteName: string;
  endDate: string;
  startDate: string;
  educationType: string;
  degree: string;
};

export type SkillType = {
  _id: string;
  toolType: string;
  title: string;
  image: Object;
};

export type ExperienceType = {
  _id: string;
  companyName: string;
  companyLocation: string;
  startDate: string;
  endDate: string;
  role: string;
  workData: string[];
  companyLogo: string;
};

export type ProjectType = {
  _id: string;
  projectTitle: string;
  deployedLink: string;
  githubLink: string;
  projectThumbnail: string;
  projectData: string[];
};
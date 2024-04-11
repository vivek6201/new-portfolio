import { z } from "zod";

export const skillsValidations = z.object({
  skillsName: z.string().min(2).max(50),
  skillImg: z
    .instanceof(FileList)
    .refine((file) => file?.length == 1, "File is required."),
});

export const projectValidations = z.object({
  title: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  skills: z.array(z.number()),
  projectData: z.array(z.string()),
});

export const experienceValidations = z.object({
  companyName: z.string(),
  role: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  companyLocation: z.string(),
  jobDescription: z.array(z.string()),
});

export const educationValidations = z.object({
  schoolName: z.string(),
  degree: z.string(),
  courseName: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  collegeLocation: z.string(),
  degreeType: z.string(),
});

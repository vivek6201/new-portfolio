import { defineField, defineType } from "sanity";

export default defineType({
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
      defineField({
        name: "projectTitle",
        title: "Project Title",
        type: "string",
      }),
      defineField({
        name: "deployedLink",
        title: "Deployed Link",
        type: "string",
      }),
      defineField({
        name: "githubLink",
        title: "Github Link",
        type: "string",
      }),
      defineField({
        name: "projectThumbnail",
        title: "Project Thumbnail",
        type: "image",
        description: "Upload a Project thumbnail",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      }),
      defineField({
        name: "projectData",
        title: "Project Data",
        type: "array",
        description: "Add work Description",
        of: [{ type: "string" }],
      }),
      defineField({
        name: "skills",
        title: "Skills",
        type: "array",
        of: [{ type: "reference", to: { type: "skills" } }],
      }),
    ],
  });
  
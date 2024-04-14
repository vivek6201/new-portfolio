import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "companyLocation",
      title: "Company Location",
      type: "string",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "string",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "workData",
      title: "Work Data",
      type: "array",
      description: "Add work Description",
      of: [{ type: "string" }],
    }),
    defineField({
        name: "companyLogo",
        title: "Company Logo",
        type: "image",
        description: "Upload a Company Logo",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      }),
  ],
});

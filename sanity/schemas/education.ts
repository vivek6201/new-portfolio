import { defineField, defineType } from "sanity";

export default defineType({
    name: "education",
    title: "Education",
    type: "document",
    fields: [
      defineField({
        name: "instituteName",
        title: "Institute Name",
        type: "string",
      }),
      defineField({
        name: "location",
        title: "Location",
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
        name: "degree",
        title: "Degree",
        type: "string",
      }),
      defineField({
        name: "educationType",
        title: "Education Type",
        type: "string",
      }),
      defineField({
        name: "degreetype",
        title: "Degree Type",
        type: "string",
      }),
    ],
  });
  
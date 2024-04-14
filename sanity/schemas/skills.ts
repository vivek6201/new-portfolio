import { defineField, defineType } from "sanity";

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "toolType",
      title: "Tool type",
      type: "string",
      options: {
        list: [
          {title: 'Design', value: 'Design'},
          {title: 'Technologies', value: 'Technologies'},
          {title: 'Productivity', value: 'Productivity'},
        ],
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});

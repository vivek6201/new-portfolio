import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const user = {
  name: "user",
  title: "User",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "fullName",
      type: "string",
      title: "Full Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "socials" } }],
    }),
    defineField({
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'resume',
      type: 'file',  
      options: {
        accept: 'application/pdf'
      }
    })
  ],
};

export default user;

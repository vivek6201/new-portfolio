import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getUser() {
  return client.fetch(
    groq`*[_type == "user"][0]{
      ...,
      socials[]->
    }`,
    {},
    { next: { revalidate: 10 } }
  );
}
export async function getEducations() {
  return client.fetch(
    groq`*[_type == "education"]{
      ...,
    }`,
    {},
    { next: { revalidate: 10 } }
  );
}
export async function getExperience() {
  return client.fetch(
    groq`*[_type == "experience"]{
      ...,
    }`,
    {},
    { next: { revalidate: 10 } }
  );
}
export async function getProjects() {
  return client.fetch(
    groq`*[_type == "projects"]{
      ...,
      skills[]->
    }`,
    {},
    { next: { revalidate: 10 } }
  );
}
export async function getSkills() {
  return client.fetch(
    groq`*[_type == "skills"]{
      title, 
      image, 
      toolType,
      createdAt,
      _id
    }`,
    {},
    { next: { revalidate: 10 } }
  );
}

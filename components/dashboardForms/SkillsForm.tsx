"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { skillsValidations } from "@/formValidationSchemas/dashboardFormValidations";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";

export default function SkillsForm() {
  const form = useForm<z.infer<typeof skillsValidations>>({
    resolver: zodResolver(skillsValidations),
  });

  const fileRef = form.register("skillImg");

  async function onSubmit(values: z.infer<typeof skillsValidations>) {
    const formData = new FormData();
    formData.append("skillsName", values.skillsName);
    formData.append("skillImg", values.skillImg[0]);

    const res = await axios.post(
      "http://localhost:4000/api/v1/skills",
      formData,
      {
        withCredentials: true,
        headers:{
          "Content-Type": "multipart/form-data",
        }
      }
    );

    if (res.status === 201) {
      console.log(res.data);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="skillsName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skill Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Skill Name" {...field} className="input input-bordered w-full max-w-xs"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skillImg"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input type="file" {...fileRef} className="file-input file-input-bordered w-full max-w-xs"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

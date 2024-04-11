"use client";

import CustomButton from "@/components/Common/CustomButton";
import { SendHorizontal } from "lucide-react";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactValidationSchema } from "@/formValidationSchemas/contactValidationSchema";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Contact() {
  const form = useForm<z.infer<typeof contactValidationSchema>>({
    resolver: zodResolver(contactValidationSchema),
  });

  function onSubmit(values: z.infer<typeof contactValidationSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="max-w-[1350px] h-full mx-auto w-11/12 md:w-10/12 rounded-2xl md:rounded-[4rem] mt-10 dark:bg-white bg-richBlack px-5 py-10 md:py-12 sm:px-10 md:px-12 relative overflow-hidden">
      <p className="text-center dark:text-richBlack text-offWhite font-extrabold font-ubuntu text-2xl md:text-3xl lg:text-4xl">
        Let's Get in Touch
      </p>
      <Form {...form}>
        <form
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 w-full flex flex-col gap-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <div
                      className={`flex gap-1 md:gap-2 w-full rounded-3xl px-4 md:px-6 py-2 lg:px-10 lg:py-5 items-center bg-[#271d1d] dark:bg-[#f3f3f3] ${
                        form.formState.errors.name?.message &&
                        "border-red-500 border"
                      }`}
                    >
                      <FaRegUser className="text-white dark:text-black text-lg md:text-2xl" />
                      <Input
                        placeholder="Full Name *"
                        {...field}
                        className="border-none text-white dark:text-black sm:text-base md:text-lg"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 ml-5 md:ml-10 sm:text-base" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div
                      className={`flex gap-1 md:gap-2 w-full rounded-3xl px-4 md:px-6 py-2 lg:px-10 lg:py-5 items-center bg-[#271d1d] dark:bg-[#f3f3f3] ${
                        form.formState.errors.email?.message &&
                        "border-red-500 border"
                      }`}
                    >
                      <MdOutlineEmail className="text-white dark:text-black text-xl md:text-2xl" />
                      <Input
                        placeholder="Email *"
                        {...field}
                        className="border-none text-white dark:text-black sm:text-base md:text-lg"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 ml-5 md:ml-10 sm:text-base" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div
                      className={`flex gap-1 md:gap-2 w-full rounded-3xl px-4 md:px-6 py-2 lg:px-10 lg:py-5 items-center bg-[#271d1d] dark:bg-[#f3f3f3] ${
                        form.formState.errors.subject?.message &&
                        "border-red-500 border"
                      }`}
                    >
                      <MdOutlineEmail className="text-white dark:text-black text-xl md:text-2xl" />
                      <Input
                        placeholder="Subject *"
                        {...field}
                        className="border-none text-white dark:text-black sm:text-base md:text-lg"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 ml-5 md:ml-10 sm:text-base" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div
                      className={`flex gap-1 md:gap-2 w-full rounded-3xl px-4 md:px-6 py-2 lg:px-10 lg:py-5 items-center bg-[#271d1d] dark:bg-[#f3f3f3] ${
                        form.formState.errors.phoneNumber?.message &&
                        "border-red-500 border"
                      }`}
                    >
                      <MdOutlinePhone className="text-white dark:text-black text-xl md:text-2xl" />
                      <Input
                        placeholder="Phone"
                        {...field}
                        onChange={(e) => field.onChange(+e.target.value)}
                        className="border-none text-white dark:text-black sm:text-base md:text-lg"
                        type="number"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 ml-5 md:ml-10 sm:text-base" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div
                    className={`flex gap-2 w-full rounded-3xl p-5 items-center bg-[#271d1d] dark:bg-[#f3f3f3] ${
                      form.formState.errors.message?.message &&
                      "border-red-500 border"
                    }`}
                  >
                    <Textarea
                      placeholder="Message *"
                      {...field}
                      className="border-none text-white dark:text-black sm:text-base md:text-lg outline-none resize-none min-h-[300px]"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-500 ml-5 md:ml-10 sm:text-base" />
              </FormItem>
            )}
          />
          <CustomButton
            variant={"outline"}
            colorProperty="bg-primaryBg border-primaryBg hover:bg-richBlack dark:hover:bg-offWhite hover:text-primaryBg text-black font-medium py-6 text-lg sm:text-xl md:self-start"
            type="submit"
          >
            Submit
            <SendHorizontal />
          </CustomButton>
        </form>
      </Form>
      <Image alt="design image" width={400} height={400} className="hidden md:block w-52 h-52 absolute bottom-0 right-5" src={"/contact-illustration.png"} />
    </div>
  );
}

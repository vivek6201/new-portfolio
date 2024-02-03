import { z } from "zod";

export const contactValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters long",
    })
    .max(500, {
      message: "Message must be less than 500 characters long",
    }),
  phoneNumber: z.number().optional(),
  subject: z
    .string()
    .min(5, { message: "Subject is required" }),
});

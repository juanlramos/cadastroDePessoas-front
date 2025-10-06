import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email format").nonempty("Email is required"),
  password: z
    .string()
    .nonempty()
    .min(8, "Password must have at least 8 characteres."),
});

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Name must have at least 3 characteres")
    .nonempty("Name is required.")
    .regex(
      /^[\p{L} .'-]+$/u,
      "Name cannot contain numbers or special characters"
    ),
  email: z.email("Invalid email format").nonempty("Email is required"),
  password: z
    .string()
    .nonempty()
    .min(8, "Password must have at least 8 characteres."),
  birth: z.coerce //transforma uma string em data
    .date({
      message: "Invalid date format",
    })
    .max(new Date(), "Date cannot be in the future."),
});

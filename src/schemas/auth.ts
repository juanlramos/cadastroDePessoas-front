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
  birth: z
    .string()
    .nonempty("Birth date is required")
    .refine((val) => !isNaN(Date.parse(val)), "Invalid date format")
    .refine(
      (val) => new Date(val) <= new Date(),
      "Date cannot be in the future."
    ),
});

import { z } from "zod";

export const registerSchema = z.object({
  Name: z.string(),
  Email: z.string().email(),
  Password: z.string().min(10, {
    message: "Passwords must be more than 10 characters",
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

import { z } from "zod";

export const loginSchema = z.object({
  Email: z.string().email(),
  Password: z.string().min(10, {
    message: "Passwords must be more than 10 characters",
  }),
});

export type LoginSchemaAlif = z.infer<typeof loginSchema>;

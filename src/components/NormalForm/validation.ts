import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  email: z.string().email().min(5, { message: "Email is required" }),
  password: z.string().min(8, "Password is Too Short"),
});

export type TNormalrlForm = z.infer<typeof SignupSchema>;

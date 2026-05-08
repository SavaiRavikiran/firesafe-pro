import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  password: z.string().min(8),
  role: z.enum(["CLIENT", "EXPERT", "DEALER", "ADMIN", "CALL_CENTER"]).optional()
});

export const loginSchema = z.object({
  identifier: z.string().min(3),
  password: z.string().min(8)
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";

export const validateBody = <T>(schema: ZodSchema<T>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten() });
    }
    req.body = parsed.data;
    next();
  };
};

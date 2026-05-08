import { z } from "zod";

export const premiseSchema = z.object({
  name: z.string().min(2),
  address: z.string().min(5),
  type: z.enum(["COMMERCIAL", "RESIDENTIAL_SOCIETY", "FACTORY", "HOSPITAL", "SCHOOL", "OTHER"]),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
    city: z.string().optional(),
    state: z.string().optional(),
    pincode: z.string().optional()
  })
});

export type PremiseInput = z.infer<typeof premiseSchema>;

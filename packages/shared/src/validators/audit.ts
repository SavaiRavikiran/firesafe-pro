import { z } from "zod";

export const auditCreateSchema = z.object({
  premiseId: z.string().min(3),
  auditType: z.enum(["ONLINE", "OFFLINE"]).default("ONLINE"),
  responses: z.record(z.any()).default({})
});

export const auditUpdateSchema = z.object({
  responses: z.record(z.any()).optional(),
  status: z.enum(["DRAFT", "SUBMITTED", "UNDER_REVIEW", "COMPLETED"]).optional(),
  scheduledAt: z.string().datetime().optional()
});

export type AuditCreateInput = z.infer<typeof auditCreateSchema>;
export type AuditUpdateInput = z.infer<typeof auditUpdateSchema>;

import { Router } from "express";
import { auditCreateSchema, auditUpdateSchema } from "@firesafe-pro/shared";
import { createAudit, listAudits, submitAudit, updateAudit } from "../controllers/audit.controller.js";
import { requireAuth } from "../middleware/auth.js";
import { validateBody } from "../middleware/validate.js";

export const auditRouter = Router();

auditRouter.get("/", requireAuth, listAudits);
auditRouter.post("/", requireAuth, validateBody(auditCreateSchema), createAudit);
auditRouter.put("/:id", requireAuth, validateBody(auditUpdateSchema), updateAudit);
auditRouter.post("/:id/submit", requireAuth, submitAudit);
auditRouter.post("/:id/media", requireAuth, (_req, res) => res.json({ message: "Media upload placeholder" }));
auditRouter.get("/:id/report", requireAuth, (_req, res) => res.json({ message: "Report endpoint placeholder" }));

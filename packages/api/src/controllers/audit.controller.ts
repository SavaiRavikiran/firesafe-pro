import type { Response } from "express";
import { prisma } from "../lib/prisma.js";
import type { AuthRequest } from "../middleware/auth.js";

export const listAudits = async (req: AuthRequest, res: Response) => {
  const audits = await prisma.audit.findMany({
    where: { userId: req.userId },
    orderBy: { createdAt: "desc" }
  });

  return res.json(audits);
};

export const createAudit = async (req: AuthRequest, res: Response) => {
  const audit = await prisma.audit.create({
    data: {
      userId: req.userId!,
      premiseId: req.body.premiseId,
      auditType: req.body.auditType,
      responses: req.body.responses
    }
  });

  return res.status(201).json(audit);
};

export const updateAudit = async (req: AuthRequest, res: Response) => {
  const id = String(req.params.id ?? "");
  const existing = await prisma.audit.findFirst({ where: { id, userId: req.userId } });
  if (!existing) return res.status(404).json({ message: "Audit not found" });

  const updated = await prisma.audit.update({
    where: { id },
    data: {
      responses: req.body.responses ?? existing.responses,
      status: req.body.status ?? existing.status,
      scheduledAt: req.body.scheduledAt ? new Date(req.body.scheduledAt) : existing.scheduledAt
    }
  });

  return res.json(updated);
};

export const submitAudit = async (req: AuthRequest, res: Response) => {
  const id = String(req.params.id ?? "");
  const existing = await prisma.audit.findFirst({ where: { id, userId: req.userId } });
  if (!existing) return res.status(404).json({ message: "Audit not found" });

  const submitted = await prisma.audit.update({
    where: { id },
    data: { status: "SUBMITTED", submittedAt: new Date() }
  });

  return res.json(submitted);
};

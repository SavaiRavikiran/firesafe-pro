import type { Response } from "express";
import { prisma } from "../lib/prisma.js";
import type { AuthRequest } from "../middleware/auth.js";

export const listPremises = async (req: AuthRequest, res: Response) => {
  const premises = await prisma.premise.findMany({ where: { userId: req.userId } });
  return res.json(premises);
};

export const createPremise = async (req: AuthRequest, res: Response) => {
  const premise = await prisma.premise.create({
    data: {
      userId: req.userId!,
      name: req.body.name,
      address: req.body.address,
      type: req.body.type,
      location: req.body.location
    }
  });

  return res.status(201).json(premise);
};

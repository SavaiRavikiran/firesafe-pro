import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";
import { env } from "../lib/env.js";

export const register = async (req: Request, res: Response) => {
  const { name, email, phone, password, role = "CLIENT" } = req.body;

  const existing = await prisma.user.findFirst({ where: { OR: [{ email }, { phone }] } });
  if (existing) return res.status(409).json({ message: "User already exists" });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, phone, passwordHash, role }
  });

  return res.status(201).json({ id: user.id, email: user.email, phone: user.phone, role: user.role });
};

export const login = async (req: Request, res: Response) => {
  const { identifier, password } = req.body;
  const user = await prisma.user.findFirst({
    where: { OR: [{ email: identifier }, { phone: identifier }] }
  });

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const accessToken = jwt.sign({ sub: user.id, role: user.role }, env.JWT_SECRET, { expiresIn: "15m" });
  const refreshToken = jwt.sign({ sub: user.id }, env.JWT_REFRESH_SECRET, { expiresIn: "30d" });

  return res.json({ accessToken, refreshToken, user: { id: user.id, name: user.name, role: user.role } });
};

export const refresh = async (req: Request, res: Response) => {
  const { refreshToken } = req.body as { refreshToken?: string };
  if (!refreshToken) return res.status(400).json({ message: "refreshToken is required" });

  try {
    const payload = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as { sub: string };
    const user = await prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user) return res.status(401).json({ message: "Invalid refresh token" });

    const accessToken = jwt.sign({ sub: user.id, role: user.role }, env.JWT_SECRET, { expiresIn: "15m" });
    return res.json({ accessToken });
  } catch {
    return res.status(401).json({ message: "Invalid refresh token" });
  }
};

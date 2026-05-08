import { Router } from "express";
import { loginSchema, registerSchema } from "@firesafe-pro/shared";
import { login, refresh, register } from "../controllers/auth.controller.js";
import { validateBody } from "../middleware/validate.js";

export const authRouter = Router();

authRouter.post("/register", validateBody(registerSchema), register);
authRouter.post("/login", validateBody(loginSchema), login);
authRouter.post("/refresh", refresh);
authRouter.post("/otp/send", (_req, res) => res.json({ message: "OTP send placeholder" }));
authRouter.post("/otp/verify", (_req, res) => res.json({ message: "OTP verify placeholder" }));
authRouter.post("/forgot-password", (_req, res) => res.json({ message: "Forgot password placeholder" }));

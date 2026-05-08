import { Router } from "express";
import { premiseSchema } from "@firesafe-pro/shared";
import { createPremise, listPremises } from "../controllers/premise.controller.js";
import { requireAuth } from "../middleware/auth.js";
import { validateBody } from "../middleware/validate.js";

export const premiseRouter = Router();

premiseRouter.get("/", requireAuth, listPremises);
premiseRouter.post("/", requireAuth, validateBody(premiseSchema), createPremise);

import { Router } from "express";
import { authRouter } from "./auth.routes.js";
import { premiseRouter } from "./premise.routes.js";
import { auditRouter } from "./audit.routes.js";

export const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/premises", premiseRouter);
apiRouter.use("/audits", auditRouter);

apiRouter.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "firesafe-pro-api" });
});

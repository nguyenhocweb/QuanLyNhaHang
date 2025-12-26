import { Router } from "express";
import authRouter from "./auth/router.js";
const route = Router();
route.use("/v1/auth",authRouter);
export default route;
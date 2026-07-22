import { Router } from "express";
import { authenticate, authorizeRole } from "../../middlewares/auth.middleware";
import { dashboardController } from "./dashboard.controller";

const router = Router();

router.get("/student", authenticate, authorizeRole("STUDENT"), dashboardController.student);

router.get(
	"/instructor",
	authenticate,
	authorizeRole("INSTRUCTOR"),
	dashboardController.instructor,
);

router.get("/admin", authenticate, authorizeRole("ADMIN"), dashboardController.admin);

export default router;

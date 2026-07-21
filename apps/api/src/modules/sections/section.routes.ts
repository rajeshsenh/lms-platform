import { Router } from "express";
import { authenticate, authorizeRole } from "../../middlewares/auth.middleware";
import { sectionController } from "./section.controller";

const router = Router();

router.get("/course/:courseId", sectionController.list);
router.get("/:id", sectionController.getById);
router.post("/", authenticate, authorizeRole("INSTRUCTOR"), sectionController.create);
router.patch("/:id", authenticate, authorizeRole("INSTRUCTOR"), sectionController.update);
router.delete("/:id", authenticate, authorizeRole("INSTRUCTOR"), sectionController.remove);

export default router;

import { Router } from "express";
import { authenticate, authorizeRole } from "../../middlewares/auth.middleware";
import { lessonController } from "./lesson.controller";

const router = Router();

router.get("/section/:sectionId", lessonController.list);
router.get("/progress", authenticate, lessonController.getProgress);
router.get("/:id", lessonController.getById);
router.post("/", authenticate, authorizeRole("INSTRUCTOR"), lessonController.create);
router.patch("/:id", authenticate, authorizeRole("INSTRUCTOR"), lessonController.update);
router.delete("/:id", authenticate, authorizeRole("INSTRUCTOR"), lessonController.remove);
router.post("/progress", authenticate, lessonController.progress);

export default router;

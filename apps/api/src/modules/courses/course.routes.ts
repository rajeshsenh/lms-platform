import { Router } from "express";
import { authenticate, authorizeRole } from "../../middlewares/auth.middleware";
import { categoryController } from "./course.controller";

const router = Router();

router.get("/", categoryController.list);
router.get("/:id", categoryController.getById);
router.post("/", authenticate, authorizeRole("INSTRUCTOR"), categoryController.create);
router.patch("/:id", authenticate, authorizeRole("INSTRUCTOR"), categoryController.update);
router.delete("/:id", authenticate, authorizeRole("INSTRUCTOR"), categoryController.remove);

export default router;

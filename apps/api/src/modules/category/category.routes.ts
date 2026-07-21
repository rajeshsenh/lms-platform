import { Router } from "express";
import { authenticate, authorizeRole } from "../../middlewares/auth.middleware";
import { categoryController } from "./category.controller";

const router = Router();

router.get("/", categoryController.list);
router.get("/:id", categoryController.getById);
router.post("/", authenticate, authorizeRole("INSTRUCTOR", "ADMIN"), categoryController.create);
router.patch("/:id", authenticate, authorizeRole("INSTRUCTOR", "ADMIN"), categoryController.update);
router.delete(
	"/:id",
	authenticate,
	authorizeRole("INSTRUCTOR", "ADMIN"),
	categoryController.remove,
);

export default router;

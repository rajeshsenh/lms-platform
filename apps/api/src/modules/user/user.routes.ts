import { Router } from "express";
import { authenticate, authorizeRole } from "../../middlewares/auth.middleware";
import { userController } from "./user.controller";

const router = Router();

router.get("/me", authenticate, userController.me);
router.patch("/profile", authenticate, userController.update);
router.patch("/password", authenticate, userController.password);
router.get("/", authenticate, authorizeRole("ADMIN"), userController.list);
router.patch("/:id/role", authenticate, authorizeRole("ADMIN"), userController.role);
router.delete("/:id", authenticate, authorizeRole("ADMIN"), userController.remove);

export default router;

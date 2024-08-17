import express from "express";
import UserController from "../controllers/UserController.js";
import { verifyRole } from "../middleware/auth.js";
import { userValidationRules } from "../validations/UserValidation.js";

const router = express.Router();

router.get(
  "/",
  verifyRole(["admin"]),
  UserController.getAllUsers.bind(UserController)
);
router.get(
  "/:id",
  verifyRole(["admin", "cliente"]),
  UserController.getUserById.bind(UserController)
);
router.post(
  "/",
  userValidationRules,
  UserController.createUser.bind(UserController)
);
router.put(
  "/:id",
  verifyRole(["admin", "cliente"]),
  userValidationRules,
  UserController.updateUser.bind(UserController)
);
router.delete(
  "/:id",
  verifyRole(["admin"]),
  UserController.deleteUser.bind(UserController)
);

export default router;

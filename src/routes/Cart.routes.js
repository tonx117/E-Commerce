import express from "express";
import CartController from "../controllers/CartController.js";
import { verifyRole } from "../middleware/auth.js";
import { cartValidationRules } from "../validations/CartValidation.js";

const router = express.Router();

router.get(
  "/",
  verifyRole(["cliente"]),
  CartController.getCartByUserId.bind(CartController)
);
router.post(
  "/add",
  verifyRole(["cliente"]),
  cartValidationRules,
  CartController.addToCart.bind(CartController)
);
router.delete(
  "/remove/:productId",
  verifyRole(["cliente"]),
  CartController.removeFromCart.bind(CartController)
);
router.delete(
  "/clear",
  verifyRole(["cliente"]),
  CartController.clearCart.bind(CartController)
);

export default router;

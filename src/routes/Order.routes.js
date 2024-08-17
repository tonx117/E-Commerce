import express from "express";
import OrderController from "../controllers/OrderController.js";
import { verifyRole } from "../middleware/auth.js";
import { orderValidationRules } from "../validations/OrderValidation.js";

const router = express.Router();

router.get(
  "/",
  verifyRole(["admin"]),
  OrderController.getAllOrders.bind(OrderController)
);
router.get(
  "/:id",
  verifyRole(["admin", "cliente"]),
  OrderController.getOrderById.bind(OrderController)
);
router.post(
  "/",
  orderValidationRules,
  OrderController.createOrder.bind(OrderController)
);
router.put(
  "/:id",
  verifyRole(["admin"]),
  orderValidationRules,
  OrderController.updateOrder.bind(OrderController)
);
router.delete(
  "/:id",
  verifyRole(["admin"]),
  OrderController.deleteOrder.bind(OrderController)
);

export default router;

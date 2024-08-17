import express from "express";
import ProductController from "../controllers/ProductController.js";
import { verifyRole } from "../middleware/Auth.js";
import { productValidationRules } from "../validations/ProductValidation.js";

const router = express.Router();

router.get("/", ProductController.getAllProducts.bind(ProductController));

router.post(
  "/",
  verifyRole(["vendedor", "admin"]),
  productValidationRules,
  ProductController.createProduct.bind(ProductController)
);

router.put(
  "/:id",
  verifyRole(["vendedor", "admin"]),
  productValidationRules,
  ProductController.updateProduct.bind(ProductController)
);

router.delete(
  "/:id",
  verifyRole(["admin"]),
  ProductController.deleteProduct.bind(ProductController)
);

router.get("/:id", ProductController.getProductById.bind(ProductController));

export default router;

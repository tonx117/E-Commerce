import ProductService from "../services/ProductService.js";
import { validationResult } from "express-validator";

class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts(req.user.role);
      res.json(products);
    } catch (err) {
      res
        .status(403)
        .json({ message: "No tienes permiso para ver los productos." });
    }
  }

  async createProduct(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newProduct = await ProductService.createProduct(
        req.body,
        req.user.role
      );
      res.status(201).json(newProduct);
    } catch (err) {
      res
        .status(403)
        .json({ message: "No tienes permiso para crear un producto." });
    }
  }

  async updateProduct(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const updatedProduct = await ProductService.updateProduct(
        req.params.id,
        req.body,
        req.user.role
      );
      res.json(updatedProduct);
    } catch (err) {
      res
        .status(403)
        .json({ message: "No tienes permiso para actualizar este producto." });
    }
  }

  async deleteProduct(req, res) {
    try {
      const result = await ProductService.deleteProduct(
        req.params.id,
        req.user.role
      );
      res.json({ message: "Producto eliminado correctamente." });
    } catch (err) {
      res
        .status(403)
        .json({ message: "No tienes permiso para eliminar este producto." });
    }
  }

  async getProductById(req, res) {
    try {
      const product = await ProductService.getProductById(
        req.params.id,
        req.user.role
      );
      res.json(product);
    } catch (err) {
      res
        .status(403)
        .json({ message: "No tienes permiso para ver este producto." });
    }
  }
}

export default new ProductController();

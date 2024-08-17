import CartService from "../services/CartService.js";
import { validationResult } from "express-validator";

class CartController {
  async getCartByUserId(req, res) {
    try {
      const cart = await CartService.getCartByUserId(req.user.id);
      res.json(cart);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async addToCart(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const updatedCart = await CartService.addToCart(req.user.id, req.body);
      res.json(updatedCart);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async removeFromCart(req, res) {
    try {
      const updatedCart = await CartService.removeFromCart(
        req.user.id,
        req.params.productId
      );
      res.json(updatedCart);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async clearCart(req, res) {
    try {
      const updatedCart = await CartService.clearCart(req.user.id);
      res.json(updatedCart);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

export default new CartController();

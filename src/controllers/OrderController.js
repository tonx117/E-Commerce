import OrderService from "../services/OrderService.js";
import { validationResult } from "express-validator";

class OrderController {
  async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getOrderById(req, res) {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      res.json(order);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async createOrder(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newOrder = await OrderService.createOrder(req.body);
      res.status(201).json(newOrder);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateOrder(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const updatedOrder = await OrderService.updateOrder(
        req.params.id,
        req.body
      );
      res.json(updatedOrder);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async deleteOrder(req, res) {
    try {
      await OrderService.deleteOrder(req.params.id);
      res.json({ message: "Orden eliminada correctamente" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

export default new OrderController();

import Order from "../models/Order.js";

class OrderService {
  async getAllOrders() {
    return Order.findAll();
  }

  async getOrderById(id) {
    const order = await Order.findByPk(id);
    if (!order) {
      throw new Error("Orden no encontrada");
    }
    return order;
  }

  async createOrder(orderData) {
    return Order.create(orderData);
  }

  async updateOrder(id, orderData) {
    const order = await this.getOrderById(id);
    return order.update(orderData);
  }

  async deleteOrder(id) {
    const order = await this.getOrderById(id);
    await order.destroy();
    return { message: "Orden eliminada correctamente" };
  }
}

export default new OrderService();

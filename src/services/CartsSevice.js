import Cart from "../models/Cart.js";

class CartService {
  async getCartByUserId(userId) {
    return Cart.findOne({ where: { userId } });
  }

  async addToCart(userId, productData) {
    const cart = await this.getCartByUserId(userId);
    if (cart) {
      return cart.update({ products: [...cart.products, productData] });
    } else {
      return Cart.create({ userId, products: [productData] });
    }
  }

  async removeFromCart(userId, productId) {
    const cart = await this.getCartByUserId(userId);
    if (cart) {
      const updatedProducts = cart.products.filter(
        (product) => product.id !== productId
      );
      return cart.update({ products: updatedProducts });
    }
    throw new Error("Carrito no encontrado");
  }

  async clearCart(userId) {
    const cart = await this.getCartByUserId(userId);
    if (cart) {
      return cart.update({ products: [] });
    }
    throw new Error("Carrito no encontrado");
  }
}

export default new CartService();

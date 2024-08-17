import User from "../models/User.js";

class UserService {
  async getAllUsers() {
    return User.findAll();
  }

  async getUserById(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  }

  async createUser(userData) {
    const existingUser = await User.findOne({
      where: { email: userData.email },
    });
    if (existingUser) {
      throw new Error("El correo electrónico ya está en uso");
    }
    return User.create(userData);
  }

  async updateUser(id, userData) {
    const user = await this.getUserById(id);
    return user.update(userData);
  }

  async deleteUser(id) {
    const user = await this.getUserById(id);
    await user.destroy();
    return { message: "Usuario eliminado correctamente" };
  }
}

export default new UserService();

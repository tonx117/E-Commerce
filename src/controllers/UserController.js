import UserService from "../services/UserService.js";
import { validationResult } from "express-validator";

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async createUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, role } = req.body;

    const validRoles = ["cliente", "vendedor", "admin"];
    if (!validRoles.includes(role)) {
      return res.status(400).json({ message: "Rol no válido" });
    }

    try {
      const newUser = await UserService.createUser({
        username,
        email,
        password,
        role,
      });
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updateUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, role } = req.body;

    const validRoles = ["cliente", "vendedor", "admin"];
    if (role && !validRoles.includes(role)) {
      return res.status(400).json({ message: "Rol no válido" });
    }

    try {
      const updatedUser = await UserService.updateUser(req.params.id, {
        username,
        email,
        password,
        role,
      });
      res.json(updatedUser);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  async deleteUser(req, res) {
    try {
      await UserService.deleteUser(req.params.id);
      res.json({ message: "Usuario eliminado correctamente" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

export default new UserController();

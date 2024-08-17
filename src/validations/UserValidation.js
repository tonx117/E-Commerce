import { body } from "express-validator";

export const userValidationRules = [
  body("username")
    .notEmpty()
    .withMessage("El nombre de usuario es obligatorio"),
  body("email").isEmail().withMessage("Debe ser un correo electrónico válido"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
  body("role")
    .isIn(["cliente", "vendedor", "admin"])
    .withMessage("El rol no es válido"),
];

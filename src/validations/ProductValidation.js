import { body } from "express-validator";

export const productValidationRules = [
  body("name").notEmpty().withMessage("El nombre es requerido"),

  body("price")
    .isFloat({ min: 0 })
    .withMessage("El precio debe ser un número positivo"),

  body("description")
    .optional()
    .isString()
    .withMessage("La descripción debe ser una cadena de texto"),

  body("stock")
    .isInt({ min: 0 })
    .withMessage("El stock debe ser un número positivo"),

  body("category")
    .optional()
    .isString()
    .withMessage("La categoría debe ser una cadena de texto"),

  body("available")
    .optional()
    .isBoolean()
    .withMessage("La disponibilidad debe ser un valor booleano"),
];

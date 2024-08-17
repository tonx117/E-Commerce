import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development",
});

const { DB_DRIVER, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } =
  process.env;

const sequelize = new Sequelize(
  `${DB_DRIVER}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    dialect: "postgres",
    logging: false,
  }
);

try {
  await sequelize.authenticate();
  console.log("Conexión a la base de datos establecida correctamente.");
} catch (error) {
  console.error("No se pudo conectar a la base de datos:", error);
}

export default sequelize;

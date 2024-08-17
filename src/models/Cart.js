import { BelongsTo, DataTypes, Model } from "sequelize";
import sequelize from "../db/Database.js";
import User from "./User.js";

class Cart extends Model {}

Cart.init(
  {
    products: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: [],
    },
  },
  {
    sequelize,
    modelName: "Cart",
    tableName: "carts",
  }
);

Cart.belongsTo(User, { foreignKey: "userId" });

export default Cart;

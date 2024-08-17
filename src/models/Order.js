import { DataTypes, Model } from "sequelize";
import sequelize from "../db/Database.js";
import User from "./User.js";

class Order extends Model {}

Order.init(
  {
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "completed", "shipped"),
      defaultValue: "pending",
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "orders",
  }
);

Order.belongsTo(User, { foreignKey: "userId" });

export default Order;

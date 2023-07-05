import { sequelize } from "../database";
import { DataTypes, Model, Optional } from "sequelize";

export interface Product {
  id: number;
  code: string;
  description: string;
  price: number;
  fee: number;
}

export interface ProductCreationAttributes extends Optional<Product, "id"> {}

export interface ProductInstance
  extends Model<Product, ProductCreationAttributes>,
    Product {}

export const Product = sequelize.define<ProductInstance, Product>(
  "Product",
  {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(15)
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      fee: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
  }
);

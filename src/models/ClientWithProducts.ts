import { sequelize } from "../database";
import { DataTypes, Model } from "sequelize";

export interface ClientWithProduct {
  clientId: number
  productId: number
}

export interface ClientWithProductInstance extends Model<ClientWithProduct>, ClientWithProduct { }

export const ClientWithProduct = sequelize.define<ClientWithProductInstance, ClientWithProduct>(
  "ClientWithProduct",
  {
    clientId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'clients', 
        key: 'id'
      },
      onUpdate : 'CASCADE',
      onDelete: 'CASCADE'
    },
    productId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'products', 
        key: 'id'
      },
      onUpdate : 'CASCADE',
      onDelete: 'CASCADE'
    },
  }
);
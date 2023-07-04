import { sequelize } from "../database";
import { DataTypes, Model, Optional } from "sequelize";

export interface Client {
  id: number;
  code: string;
  name: string;
  legalEntity: "J" | "F" | "O";
  cnpj: string;
  state: string;
  birth: string;
}

export interface ClientCreationAttributes extends Optional<Client, "id"> {}

export interface ClientInstance
  extends Model<Client, ClientCreationAttributes>,
    Client {}

export const Client = sequelize.define<ClientInstance, Client>(
  "Client",
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
        type: DataTypes.STRING(6)
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(60),
      },
      legalEntity: {
        allowNull: false,
        type: DataTypes.STRING(1),
        validate: {
            isIn: [["J", "F", "O"]],
          },
      },
      cnpj: {
        allowNull: false,
        type: DataTypes.STRING(14),
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING(2),
      },
      birth: {
        allowNull: false,
        type: DataTypes.STRING(8),
      },
  }
);

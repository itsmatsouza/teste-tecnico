import { sequelize } from "../database";
import { DataTypes, Model, Optional } from "sequelize";

export interface Client {
  id: number;
  code: string;
  name: string;
  legalEntity: "J" | "F" | "O";
  cnpj: string;
  cpf: string
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
        allowNull: true,
        type: DataTypes.STRING(14),
      },
      cpf: {
        allowNull: true,
        type: DataTypes.STRING(11),
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING(2),
      },
      birth: {
        allowNull: false,
        type: DataTypes.STRING(8),
      },
  }, {
    hooks: {
      beforeSave: async (client) => {
        if (client.legalEntity === "J") {
          if (client.cnpj === "") throw new Error('CNPJ precisa estar preenchido para usuarios PJ')
        } else if(client.legalEntity === "F") {
          if (client.cnpj === "") throw new Error('CPF precisa estar preenchido para usuarios PF')
        }
      }
    }
  }
);

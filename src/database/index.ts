import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "technical_test_development",
  username: "postgres",
  password: "Mateus@2023",
  define: {
    underscored: true,
  },
});

import { Sequelize } from "sequelize";
import 'dotenv/config'

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "technical_test_development",
  username: process.env.POSTGRE_LOGIN,
  password: process.env.POSTGRE_PASSWORD,
  define: {
    underscored: true,
  },
});

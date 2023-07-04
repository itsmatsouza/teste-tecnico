"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      code: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(15)
      },
      description: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER(10,2),
      },
      fee: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER(10,2),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};

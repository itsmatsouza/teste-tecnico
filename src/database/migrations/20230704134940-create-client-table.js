"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("clients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      code: {
        allowNull: false,
        unique: true,
        type: Sequelize.DataTypes.STRING(6)
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(60),
      },
      legal_entity: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(1),
      },
      cnpj: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING(14),
      },
      cpf: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING(11),
      },
      state: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(2),
      },
      birth: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(8),
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
    await queryInterface.dropTable("clients");
  },
};

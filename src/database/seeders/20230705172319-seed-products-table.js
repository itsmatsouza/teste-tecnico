'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        code: "20000000000001",
        description: "LEVANTA VIDRO AUDI TT",
        price: 33.56,
        fee: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "20000000000002",
        description: "PLAYSTATION 5 1TB",
        price: 3500.90,
        fee: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "20000000000003",
        description: "RYZEN 7 5700G",
        price: 1233.87,
        fee: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "20000000000004",
        description: "RESIDENT EVIL 4 REMAKE",
        price: 259.99,
        fee: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "20000000000005",
        description: "GARRAFA DE AGUA 1L",
        price: 4.99,
        fee: 8,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {
      where: [{
        code: "20000000000001",
        description: "LEVANTA VIDRO AUDI TT",
        price: 33.56,
        fee: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "20000000000002",
        description: "PLAYSTATION 5 1TB",
        price: 3500.90,
        fee: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "20000000000003",
        description: "RYZEN 7 5700G",
        price: 1233.87,
        fee: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "20000000000004",
        description: "RESIDENT EVIL 4 REMAKE",
        price: 259.99,
        fee: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "20000000000005",
        description: "GARRAFA DE AGUA 1L",
        price: 4.99,
        fee: 8,
        created_at: new Date(),
        updated_at: new Date()
      }]
    })
  }
};
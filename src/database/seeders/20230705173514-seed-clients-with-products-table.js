'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('client_with_products', [
      {
        client_id: 1,
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 1,
        product_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 2,
        product_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 2,
        product_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 2,
        product_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 2,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 3,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 4,
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 4,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 2,
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('client_with_products', null, {
      where: [      {
        client_id: 1,
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 1,
        product_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 2,
        product_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 2,
        product_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 2,
        product_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 2,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 3,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 4,
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 4,
        product_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        client_id: 2,
        product_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }]
    })
  }
};
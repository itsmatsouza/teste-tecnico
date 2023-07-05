'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clients', [
      {
        code: "244001",
        name: "Mateus Souza",
        legal_entity: "F",
        cpf: "42555309802",
        state: "SP",
        birth: "20001108",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "244002",
        name: "Larissa Cassimiro",
        legal_entity: "F",
        cpf: "93809876591",
        state: "SP",
        birth: "19990821",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "244003",
        name: "Lucas Silva",
        legal_entity: "J",
        cnpj: "10452435000120",
        state: "SP",
        birth: "19870126",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "244004",
        name: "Fernanda Borlin",
        legal_entity: "F",
        cpf: "67839897201",
        state: "SP",
        birth: "19790710",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "244005",
        name: "Bruno Batista",
        legal_entity: "O",
        state: "SP",
        birth: "19810809",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clients', null, {
      where: [
        {
          code: "244001",
          name: "Mateus Souza",
          legal_entity: "F",
          cpf: "42555309802",
          state: "SP",
          birth: "20001108",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          code: "244002",
          name: "Larissa Cassimiro",
          legal_entity: "F",
          cpf: "93809876591",
          state: "SP",
          birth: "19990821",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          code: "244003",
          name: "Lucas Silva",
          legal_entity: "J",
          cnpj: "10452435000120",
          state: "SP",
          birth: "19870126",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          code: "244004",
          name: "Fernanda Borlin",
          legal_entity: "F",
          cpf: "67839897201",
          state: "SP",
          birth: "19790710",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          code: "244005",
          name: "Bruno Batista",
          legal_entity: "O",
          state: "SP",
          birth: "19810809",
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    })
  }
};

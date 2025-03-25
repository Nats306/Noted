'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('waters', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false
      },
      litrosTomadosDia: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      usuarioFk: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id",
        },
        onDelete: "CASCADE",
      }
    })
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable
  }
};

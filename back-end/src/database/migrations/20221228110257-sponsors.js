'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sponsors', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      trading_name: {
        type: Sequelize.STRING,
      },
      cashforce_tax: {
        type: Sequelize.STRING,
      },
      responsible_name: {
        type: Sequelize.STRING,
      },
      responsible_email: {
        type: Sequelize.STRING,
      },
      responsible_position: {
        type: Sequelize.STRING,
      },
      responsible_phone: {
        type: Sequelize.STRING,
      },
      responsible_mobile: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.STRING,
      },
      postal_code: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      number: {
        type: Sequelize.STRING,
      },
      complement: {
        type: Sequelize.STRING,
      },
      neighborhood: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      bank: {
        type: Sequelize.STRING,
      },
      bankAgency: {
        type: Sequelize.STRING,
      },
      account: {
        type: Sequelize.STRING,
      },
      phone_number: {
        type: Sequelize.STRING,
      },
      situation: {
        type: Sequelize.STRING,
      },
      situation_date: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cnpj_id: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'cnpjs'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      email: {
        type: Sequelize.STRING
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('sponsors');
  }
};

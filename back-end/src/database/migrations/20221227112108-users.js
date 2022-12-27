'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      phone_number: {
        type: Sequelize.STRING,
      },
      mobile: {
        type: Sequelize.STRING,
      },
      departament: {
        type: Sequelize.STRING,
      },
      verification_code: {
        type: Sequelize.STRING,
      },
      email_checked: {
        type: Sequelize.TINYINT,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      cashforce_adm: {
        type: Sequelize.TINYINT,
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  }
};

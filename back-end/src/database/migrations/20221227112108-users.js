'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
      email: {
        type: Sequelize.STRING,
        allowNull: false,
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
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cashforce_adm: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  }
};

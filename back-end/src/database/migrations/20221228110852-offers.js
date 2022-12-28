'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      tax: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tariff: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ad_valorem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      float: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      iof: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expires_in: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      payment_status_sponsor: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      payment_status_provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'orders'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      sponsor_id: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'sponsors'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('offers');
  }
};

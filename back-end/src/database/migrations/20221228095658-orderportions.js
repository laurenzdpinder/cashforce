'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      n_dup: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      d_venc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      v_dup: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      available_to_market: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('orderportions');
  }
};

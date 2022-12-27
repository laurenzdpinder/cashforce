'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      order_nf_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      order_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      order_path: {
        type: Sequelize.STRING,
        unique: true,
      },
      order_file_name: {
        type: Sequelize.STRING,
        unique: true,
      },
      order_original_name: {
        type: Sequelize.STRING,
        unique: true,
      },
      emission_date: {
        type: Sequelize.STRING,
      },
      pdf_file: {
        type: Sequelize.STRING,
      },
      emited_to: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      n_nf: {
        type: Sequelize.STRING,
      },
      CTE: {
        type: Sequelize.STRING,
      },
      value: {
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
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'users'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      buyer_id: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'buyers'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      provider_id: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'providers'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      order_status_buyer: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      order_status_provider: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      delivery_receipt: {
        type: Sequelize.STRING,
      },
      cargo_packing_list: {
        type: Sequelize.STRING,
      },
      delivery_ctrc: {
        type: Sequelize.STRING
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('orders');
  }
};

const { DataTypes } = require('Sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  n_dup: {
    type: DataTypes.STRING,
    allowNull: false
  },
  d_venc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  v_dup: {
    type: DataTypes.STRING,
    allowNull: false
  },
  available_to_market: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  order_id: {
    type: DataTypes.INTEGER,
  }
};

module.exports = (sequelize) => {
  const OrderPortion = sequelize.define(
    'OrderPortion',
    Attributes,
    {
      tableName: 'orderportions',
      underscored: true,
      timestamps: true,
    }
  );

  OrderPortion.associate = (models) => {
    OrderPortion.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' })
  };

  return OrderPortion;
};

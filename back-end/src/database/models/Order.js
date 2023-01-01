const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  orderNfId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  orderPath: {
    type: DataTypes.STRING,
    unique: true
  },
  orderFileName: {
    type: DataTypes.STRING,
    unique: true
  },
  orderOriginalName: {
    type: DataTypes.STRING,
    unique: true
  },
  emissionDate: {
    type: DataTypes.STRING
  },
  pdfFile: {
    type: DataTypes.STRING
  },
  emitedTo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nNf: {
    type: DataTypes.STRING
  },
  CTE: {
    type: DataTypes.STRING,
    field: 'CTE'
  },
  value: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cnpjId: {
    type: DataTypes.INTEGER
  },
  userId: {
    type: DataTypes.INTEGER
  },
  buyerId: {
    type: DataTypes.INTEGER
  },
  providerId: {
    type: DataTypes.INTEGER
  },
  orderStatusBuyer: {
    type: DataTypes.STRING,
    defaultValue: '0'
  },
  orderStatusProvider: {
    type: DataTypes.STRING,
    defaultValue: '0'
  },
  deliveryReceipt: {
    type: DataTypes.STRING
  },
  cargoPackingList: {
    type: DataTypes.STRING
  },
  deliveryCtrc: {
    type: DataTypes.STRING
  }
};

module.exports = (sequelize) => {
  const Order = sequelize.define(
    'Order',
    Attributes,
    {
      tableName: 'orders',
      underscored: true,
      timestamps: true,
    }
  );

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Order.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
    Order.belongsTo(models.Buyer, { foreignKey: 'buyerId', as: 'buyer' });
    Order.belongsTo(models.Provider, { foreignKey: 'providerId', as: 'provider' });
    Order.hasMany(models.OrderPortion, { foreignKey: 'orderId', as: 'orderPortions' });
    Order.hasMany(models.Offer, { foreignKey: 'orderId', as: 'offers' });
  };

  return Order;
};


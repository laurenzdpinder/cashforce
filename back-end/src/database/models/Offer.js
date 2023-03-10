const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tax: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tariff: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adValorem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  float: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  iof: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiresIn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paymentStatusSponsor: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  paymentStatusProvider: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  orderId: {
    type: DataTypes.INTEGER,
  },
  sponsorId: {
    type: DataTypes.INTEGER,
  }
};

module.exports = (sequelize) => {
  const Offer = sequelize.define(
    'Offer',
    Attributes,
    {
      tableName: 'offers',
      underscored: true,
      timestamps: true,
    }
  );

  Offer.associate = (models) => {
    Offer.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' });
    Offer.belongsTo(models.Sponsor, { foreignKey: 'sponsorId', as: 'sponsor' });
  };

  return Offer;
};

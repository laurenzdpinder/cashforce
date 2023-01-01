const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tradingName: {
    type: DataTypes.STRING
  },
  cashforceTax: {
    type: DataTypes.STRING
  },
  responsibleName: {
    type: DataTypes.STRING
  },
  responsibleEmail: {
    type: DataTypes.STRING
  },
  responsiblePosition: {
    type: DataTypes.STRING
  },
  responsiblePhone: {
    type: DataTypes.STRING
  },
  responsibleMobile: {
    type: DataTypes.STRING
  },
  website: {
    type: DataTypes.STRING
  },
  postalCode: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  number: {
    type: DataTypes.STRING
  },
  complement: {
    type: DataTypes.STRING
  },
  neighborhood: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  state: {
    type: DataTypes.STRING
  },
  phoneNumber: {
    type: DataTypes.STRING
  },
  situation: {
    type: DataTypes.STRING
  },
  situationDate: {
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
  confirm: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  email: {
    type: DataTypes.STRING
  }
};

module.exports = (sequelize) => {
  const Buyer = sequelize.define(
    'Buyer',
    Attributes,
    {
      tableName: 'buyers',
      underscored: true,
      timestamps: true,
    }
  );

  Buyer.associate = (models) => {
    Buyer.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
    Buyer.hasMany(models.Order, { foreignKey: 'buyerId', as: 'orders' });
  };


  return Buyer;
};

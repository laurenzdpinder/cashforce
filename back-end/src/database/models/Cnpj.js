const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  companyType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
};

module.exports = (sequelize) => {
  const Cnpj = sequelize.define(
    'Cnpj',
    Attributes,
    {
      tableName: 'cnpjs',
      underscored: true,
      timestamps: true,
    }
  );

  Cnpj.associate = (models) => {
    Cnpj.hasOne(models.Buyer, { foreignKey: 'cnpjId', as: 'buyer' });
    Cnpj.hasOne(models.Provider, { foreignKey: 'cnpjId', as: 'provider' });
    Cnpj.hasOne(models.Sponsor, { foreignKey: 'cnpjId', as: 'sponsor' });
    Cnpj.hasMany(models.Order, { foreignKey: 'cnpjId', as: 'orders' });
  };

  return Cnpj;
};
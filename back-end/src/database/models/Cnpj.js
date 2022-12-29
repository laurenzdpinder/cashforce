const { DataTypes } = require('Sequelize');

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
      underscore: true,
      timestamps: true,
    }
  );

  return Cnpj;
};
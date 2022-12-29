const { DataTypes } = require('Sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tradingName: {
    type: DataTypes.STRING,
  },
  cashforceTax: {
    type: DataTypes.STRING,
  },
  responsibleName: {
    type: DataTypes.STRING,
  },
  responsibleEmail: {
    type: DataTypes.STRING,
  },
  responsiblePosition: {
    type: DataTypes.STRING,
  },
  responsiblePhone: {
    type: DataTypes.STRING,
  },
  responsibleMobile: {
    type: DataTypes.STRING,
  },
  website: {
    type: DataTypes.STRING,
  },
  postalCode: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.STRING,
  },
  complement: {
    type: DataTypes.STRING,
  },
  neighborhood: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  bank: {
    type: DataTypes.STRING,
  },
  bankAgency: {
    type: DataTypes.STRING,
  },
  account: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  situation: {
    type: DataTypes.STRING,
  },
  situationDate: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cnpjId: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING
  }
};

module.exports = (sequelize) => {
  const Sponsor = sequelize.define(
    'Sponsor',
    Attributes,
    {
      tableName: 'sponsors',
      underscored: true,
      timestamps: true,
    }
  );

  Sponsor.associate = (models) => {
    Sponsor.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
    Sponsor.hasMany(models.Offer, { foreignKey: 'sponsorId', as: 'offers' });
  };

  return Sponsor;
};

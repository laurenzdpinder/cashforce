const { Cnpj, Provider } = require('../database/models');

const readProviderbyId = async (id) => {
  const provider = await Provider.findByPk(id, {
    include: [{ model: Cnpj, as: 'cnpj', attribute: ['cnpj'] }],
  });

  return provider;
};

module.exports = {
  readProviderbyId,
};

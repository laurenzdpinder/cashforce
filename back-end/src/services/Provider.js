const { Provider } = require('../database/models');

const readProviderbyId = async (id) => {
  const provider = await Provider.findByPk(id);

  return provider;
};

module.exports = {
  readProviderbyId,
};

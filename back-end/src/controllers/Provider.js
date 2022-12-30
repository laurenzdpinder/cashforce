const services = require('../services');

const readProviderbyId = async (req, res) => {
  const { id } = req.params;

  const provider = await services.readProviderbyId(id);

  return res.status(200).json(provider);
};

module.exports = {
  readProviderbyId,
};

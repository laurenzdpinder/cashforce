const services = require('../services');

const readBuyerbyId = async (req, res) => {
  const { id } = req.params;

  const buyer = await services.readBuyerbyId(id);

  return res.status(200).json(buyer);
};

module.exports = {
  readBuyerbyId,
};

const { Buyer } = require('../database/models');

const readBuyerbyId = async (id) => {
  const buyer = await Buyer.findByPk(id);

  return buyer;
};

module.exports = {
  readBuyerbyId,
};

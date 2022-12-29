const services = require('../services');

const readOrders = async (_req, res) => {
  const orders = await services.readOrders();

  return res.status(200).json(orders);
};

module.exports = {
  readOrders,
};

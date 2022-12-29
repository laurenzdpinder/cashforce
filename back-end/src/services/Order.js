const { Order } = require('../database/models');

const readOrders = async () => {
  const orders = await Order.findAll();

  return orders;
};

module.exports = {
  readOrders,
};

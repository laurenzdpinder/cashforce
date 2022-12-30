const { Buyer, Order, Provider } = require('../database/models');

const readOrders = async () => {
  const orders = await Order.findAll({
    include: [
      { model: Buyer, as: 'buyer', attributes: ['name'] },
      { model: Provider, as: 'provider', attributes: ['name'] }
    ],
  });

  return orders;
};

module.exports = {
  readOrders,
};

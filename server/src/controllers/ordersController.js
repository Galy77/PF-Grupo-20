const { User, Order } = require("../db");


async function getOrdersWithUsers(req, res) {
  try {
    const orders = await Order.findAll({ include: User }); 
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ocurrió un error al obtener las órdenes.' });
  }
}

async function createOrder(req, res) {
    try {
      const { id_user, order_shipping, order_email } = req.body;

      const order = await Order.create({
        id_user,
        order_shipping,
        order_email
      });
  
      res.status(201).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ocurrió un error al crear la orden.' });
    }
  }

module.exports = {
  getOrdersWithUsers,
  createOrder
};

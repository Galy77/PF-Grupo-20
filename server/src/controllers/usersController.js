const { User, Order } = require("../db");


async function getUsersWithOrders(req, res) {
  try {
    const users = await User.findAll({ include: Order });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ocurrió un error al obtener los usuarios.' });
  }
}

module.exports = {
  getUsersWithOrders
};

const { User } = require("../db");
const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      
      const filterUsers = users.filter(us => us.status === 1 )
      return res.status(200).json(filterUsers);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
};
  
  module.exports = {
    getAllUsers,
};
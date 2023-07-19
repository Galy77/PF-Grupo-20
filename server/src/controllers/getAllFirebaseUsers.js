const { User } = require("../db");
const getAllFirebaseUsers = async (req, res) => {
    try {
      const firebaseUsers = await User.findAll();
      return res.status(200).json(firebaseUsers);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };
  
  module.exports = {
    getAllFirebaseUsers,
  };
const { User } = require("../db");

const superUser = {
  full_name: "super",
  email: "superadmin@gmail.com",
  password: "12345",
  phone: 78945,
  direction_shipping: "colinas 223",
   role: 2
}

const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      if(users.length === 0){
        const userCreated = await User.create(superUser)
        return res.status(200).json(userCreated)
      }
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
     if(users.length === 0){
       const userCreated = await User.create(superUser)
       return res.status(200).json(userCreated)
     } 
     const filterUsers = users.filter(us => us.status === 1 )
     return res.status(200).json(filterUsers);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
  
  module.exports = {
    getAllUsers,
    getUsers,
};
const { User } = require("../db");
const postUser = async (req, res) => {
  const { full_name, email, password, phone, direction_shipping } = req.body;
  try {
    const newUser = {
      full_name,
      email,
      password,
      phone,
      direction_shipping,
    };
    const createUser = await User.create(newUser);
    return res.status(200).json(createUser);
  } catch (error) {
    return res.status(404).send({ error: error.message })
  }
};

module.exports = {
  postUser,
};

const { User } = require("../db");

const postUser = async (req, res) => {
  const { full_name, email, password, phone, direction_shipping } = req.body;
  console.log("entro", full_name, email, password, phone, direction_shipping);

  try {

    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ status: 409, error: "Ya existe un usuario con ese email" });
    }

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
    return res.status(500).json({ error: "Error al crear el usuario" });
  }
};

module.exports = {
  postUser,
};

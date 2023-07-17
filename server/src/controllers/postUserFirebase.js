const { FirebaseUser } = require("../db");

const postUserFirebase = async (req, res) => {
  const { name, email } = req.body;

  try {

    const existingUser = await FirebaseUser.findOne({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ status: 409, error: "Ya existe un usuario con ese email" });
    }

    const newUser = {
      name,
      email,
    };
    const createUser = await FirebaseUser.create(newUser);
    return res.status(200).json(createUser);
  } catch (error) {
    return res.status(500).json({ error: "Error al crear el usuario" });
  }
};

module.exports = {
  postUserFirebase,
};

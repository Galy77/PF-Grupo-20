const { FirebaseUser } = require("../db");
//const cloudinary = require('../utils/cloudinary');

const putFirebaseUser = async (req, res) => {
  const { id } = req.params;
  const { phone, direction_shipping } = req.body;

  //let image;

  //   if (req.file) {
  //     image = req.file;
  //   }

  try {
    const usuario = await FirebaseUser.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (phone) {
      usuario.phone = phone;
    }

    if (direction_shipping) {
      usuario.direction_shipping = direction_shipping;
    }

    await usuario.save();

    return res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = {
  putFirebaseUser,
};

const { User } = require("../db");
const cloudinary = require("../utils/cloudinary");

const putUser = async (req, res) => {
  const { id } = req.params;

  const {
    status,
    full_name,
    email,
    password,
    phone,
    direction_shipping,
    role,
  } = req.body;
  let image;

  if (req.file) {
    image = req.file;
  }

  try {
    const usuario = await User.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    if (full_name) {
      usuario.full_name = full_name;
    }

    if (email) {
      usuario.email = email;
    }

    if (password) {
      usuario.password = password;
    }

    if (phone) {
      usuario.phone = phone;
    }

    if (direction_shipping) {
      usuario.direction_shipping = direction_shipping;
    }

    if (role) {
      usuario.role = role;
    }

    if (image) {
      // Solo sube la imagen si se proporciona una nueva
      const result = await cloudinary.uploader.upload(image.path, {
        folder: "user",
      });
      usuario.image = result.secure_url;
    }

    if (status) {
      usuario.status = status;
    }
    await usuario.save();

    return res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = {
  putUser,
};

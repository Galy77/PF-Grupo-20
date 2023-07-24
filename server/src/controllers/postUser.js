const { User } = require("../db");

const transporter = require("../middleware/nodemailer")

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
      await transporter.sendMail({
      from: '"Mercado Henry" <pf@gmail.com>', // sender address
      to: newUser.email, // list of receivers
      subject: "Usuario Creado", // Subject line
      html: "<b>Bienvenido a Mercado Henry</b>", // html body
    });
  
    const createUser = await User.create(newUser);
    return res.status(200).json(createUser);
    
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = {
  postUser,
};

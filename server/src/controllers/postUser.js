const { User } = require("../db");
const transporter = require("../middleware/nodemailer")

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
      await transporter.sendMail({
      from: '"Mercado Henry" <pf@gmail.com>', // sender address
      to: newUser.email, // list of receivers
      subject: "Usuario Creado", // Subject line
      html: "<b>Bienvenido a Ecommerce </b>", // html body
    });
  
    const createUser = await User.create(newUser);
    return res.status(200).json(createUser);
    
  } catch (error) {
    return res.status(404).send({ error: error.message })
  }
};

module.exports = {
  postUser,
};

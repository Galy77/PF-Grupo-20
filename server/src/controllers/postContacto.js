const { Contacto } = require("../db");
const transporter = require("../middleware/nodemailer")

const postContacto = async (req, res) => {
  const { name, email, description } = req.body;
  try {
    const newContacto = {
      name,
      email,
      description,
    };
      await transporter.sendMail({
      from: '"Mercado Henry" <pf@gmail.com>', // sender address
      to: newContacto.email, // list of receivers
      subject: "Contacto", // Subject line
      html: "<b>Informacion ha sido recibida </b>", // html body
    });
  
    const createContacto = await Contacto.create(newContacto);
    return res.status(200).json(createContacto);
    
  } catch (error) {
    return res.status(404).send({ error: error.message })
  }
};

module.exports = {
  postContacto,
};

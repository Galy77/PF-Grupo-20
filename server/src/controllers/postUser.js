const { User } = require("../db");
const transporter = require("../middleware/nodemailer");

const postUser = async (req, res) => {
  const { full_name, email, password, phone, direction_shipping, displayName } = req.body;
  console.log("entro", full_name, email, password, phone, direction_shipping, displayName);

  try {

    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ status: 409, error: "Ya existe un usuario con ese email" });
    }
    const newUser = {
      full_name: full_name || displayName,
      email,
      password,
      phone,
      direction_shipping,
    };
    await transporter.sendMail({
      from: '"Onearket"<pf@gmail.com>', 
      to: email, 
      subject: "¡Bienvenido a ONE!",
      html: `
        <h1>Hola ${full_name},</h1>
        <p>¡Bienvenido a ONE!</p>
        <p>Estamos emocionados de tenerte como parte de nuestra comunidad.</p>
        <p>En ONE, podrás disfrutar de una experiencia única de compras en línea con una amplia selección de productos y ofertas especiales.</p>
        <p>No dudes en explorar nuestro catálogo y encontrar productos increíbles a precios inigualables.</p>
        <p>Si tienes alguna pregunta o necesitas ayuda, nuestro equipo de soporte estará encantado de asistirte.</p>
        <p>¡Gracias por unirte a nosotros!</p>
        <p>Atentamente,</p>
        <p>El equipo de ONE</p>
      `});
      
      
    const createUser = await User.create(newUser);
    return res.status(200).json(createUser);
    
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = {
  postUser,
};

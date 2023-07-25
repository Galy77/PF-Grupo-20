const { FirebaseUser } = require("../db");
const transporter = require("../middleware/nodemailer")
const postUserFirebase = async (req, res) => {
  const { displayName, email, photoURL } = req.body;
  console.log("datos firebase",displayName, email, photoURL)
  try {
    const existingUser = await FirebaseUser.findOne({
      where: { email },
    });
    if (existingUser) {
      console.log("usuario existnte",existingUser)
      return res.status(200).json(existingUser);
    }

    const newUser = {
      name:displayName,
      image:photoURL,
      email
    };
    console.log("mi user esta sas",newUser)
    await transporter.sendMail({
      from: '"Onearket"<pf@gmail.com>', 
      to: email, 
      subject: "¡Bienvenido a ONE!",
      html: `
        <h1>Hola ${displayName},</h1>
        <p>¡Bienvenido a ONE!</p>
        <p>Estamos emocionados de tenerte como parte de nuestra comunidad.</p>
        <p>En ONE, podrás disfrutar de una experiencia única de compras en línea con una amplia selección de productos y ofertas especiales.</p>
        <p>No dudes en explorar nuestro catálogo y encontrar productos increíbles a precios inigualables.</p>
        <p>Si tienes alguna pregunta o necesitas ayuda, nuestro equipo de soporte estará encantado de asistirte.</p>
        <p>¡Gracias por unirte a nosotros!</p>
        <p>Atentamente,</p>
        <p>El equipo de ONE</p>
      `});

      console.log("se envio el sas");
      const createUser = await FirebaseUser.create(newUser);
      
      console.log("se creo mi sas",createUser)
      return res.status(200).json(createUser);

    } catch (error) {
      return res.status(500).json({ error: "Error al crear el usuario" });
    }
};

module.exports = {
  postUserFirebase,
};

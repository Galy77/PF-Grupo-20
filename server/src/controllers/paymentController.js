const mercadopago = require("mercadopago");
// const admin = require('firebase-admin');
const { User, Payments } = require("../db");

const verifyIdToken = async (token) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userEmail = decodedToken.email;
    return userEmail;
  } catch (error) {
    throw new Error(
      "Error al verificar el token de ID de Firebase: " + error.message
    );
  }
};

const uploadPayment = async (token, paymentId) => {
  try {
    const userEmail = await verifyIdToken(token);

    const user = await User.findOne({ where: { email: userEmail } });

    if (user) {
      const payment = await mercadopago.payment.findById(paymentId);
      const amount = payment.body.transaction_amount;

      const paymentData = {
        id_user: user.id,
        email: userEmail,
        amount: amount,
      };

      await Payments.create(paymentData);
    } else {
      throw new Error(
        "Usuario no encontrado para el correo electrónico proporcionado"
      );
    }
  } catch (error) {
    console.error("Error al subir el pago a la base de datos:", error);
    throw error;
  }
};

const handlePaymentUpload = async (req, res) => {
  const { token, paymentId } = req.body;

  try {
    await uploadPayment(token, paymentId);
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const createPayment = async (req, res) => {
  try {
    const { id_user, email, amount, id_product } = req.body;
    const paymentData = {
      id_user,
      email,
      amount,
      id_product,
    };
    const response = await Payments.create(paymentData);
    res.status(200).json(response);
  } catch (error) {}
};
const getPaymentByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await User.findByPk(id);
    let payments = await request.getPayments();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto por ID" });
  }
};
module.exports = {
  handlePaymentUpload,
  getPaymentByUserId,
  createPayment,
};

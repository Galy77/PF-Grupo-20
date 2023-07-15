const mercadopago = require("mercadopago");

const recieveWebhook = async (req, res) => {
  const payment = req.query;

  try {
    if (payment.type == "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log(data);
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500).json({
      error: error.message,
    });
  }
};
module.exports = {
  recieveWebhook,
};

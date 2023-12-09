const mercadopago = require("mercadopago");

const { ACCESS_TOKEN } = proccess.env;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const postPreference = (req, res) => {
  try {
    let preference = {
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        },
      ],
      back_urls: {
        success: "https://pf-grupo-20.vercel.app/success",
        failure: "http://localhost:5173/failure",
        pending: "http://localhost:5173/cart",
      },

      // notification_url: "https://api-market-henry-jczt.onrender.com/pf/webhook",

      auto_return: "approved",
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          id: response.body.id,
        });
      })
      .catch(function (error) {});
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = {
  postPreference,
};

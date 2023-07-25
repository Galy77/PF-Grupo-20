const mercadopago = require("mercadopago")
mercadopago.configure({
    access_token:"TEST-1194489369448577-071110-a76042edb0c499b5794e0c45088b5e07-1420172305",
})

const postPreference = (req, res) => {
    try {
        let preference = {
            items: [
                {
                    title: req.body.description,
                    unit_price: Number(req.body.price),
                    quantity: Number(req.body.quantity),
                }
            ],
            back_urls: {
                "success": "http://localhost:5173/success",
                "failure": "http://localhost:5173/failure",
                "pending": "http://localhost:5173/cart"
            },

            // notification_url: "http://localhost:3001/pf/webhook",

            auto_return: "approved",
        };
    
        mercadopago.preferences.create(preference)
            .then(function (response) {
                res.json({
                    id: response.body.id
                });
            }).catch(function (error) {
                console.log(error);
            });

    } catch (error) {

        res.status(404).send({ error: error.message })

    }
};

module.exports = {
    postPreference
};
const mercadopago = require("mercadopago")
mercadopago.configure({
    access_token:"TEST-4743047827353853-070813-4c276747a002655f7e652afe39298bfb-609427139",
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

            notification_url: "https://api-market-henry-jczt.onrender.com/pf/webhook",

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
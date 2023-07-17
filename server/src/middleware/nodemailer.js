const nodemailer = require("nodemailer");
// var nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port:465,
    secure: true,
    auth: {
        user:"maximilianocardenassaya@gmail.com",
        pass:"zqnozpnixtkvyzfp"
    },
});

module.exports = transporter;
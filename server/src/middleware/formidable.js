const formidable = require('formidable');

const upload = (req, res, next) => {
  const form = new formidable.IncomingForm({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: 'Error en el servidor' });
    }

    req.body = fields;
    req.files = files;

    next();
  });
};

module.exports = upload;

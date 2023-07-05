const { Router } = require("express");
const getCategory = require("../controllers/getCategory");
const postProduct = require("../controllers/postProduct");

const router = Router();

router.get('/', getCategory);

router.post('/', (req, res) => {
    postProduct(req, res)
});

module.exports = router;

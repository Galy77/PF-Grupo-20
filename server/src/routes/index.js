const { Router } = require("express");
const getCategory = require("../controllers/getCategory");
const { getProducts } = require("../controllers/getProducts");
const { postProduct } = require("../controllers/postProduct");
const { postUser } = require("../controllers/postUser");

const upload = require("../middleware/multer");

const router = Router();

router.get('/', getCategory);

router.get('/products', getProducts);

router.post('/products', upload.single('image'), postProduct);

router.post('/user', postUser);

module.exports = router;

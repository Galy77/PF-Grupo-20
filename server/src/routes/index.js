const { Router } = require("express");
const getCategory = require("../controllers/getCategory");
const { getProducts, getProductById } = require("../controllers/getProduct");
const { postProduct } = require("../controllers/postProduct");
const { postUser } = require("../controllers/postUser");

// const upload = require("../middleware/multer");
const upload = require('../middleware/formidable');

const router = Router();

router.get("/", getCategory);

router.get("/products", getProducts);
router.get("/products/:id", getProductById);

router.post("/products", upload, postProduct);

router.post("/user", postUser);

module.exports = router;

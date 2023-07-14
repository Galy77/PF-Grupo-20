const { Router } = require("express");
const getCategory = require("../controllers/getCategory");
const { getProducts, getProductById } = require("../controllers/getProduct");
const { postProduct } = require("../controllers/postProduct");
const { postUser } = require("../controllers/postUser");
const { getAllUsers } = require("../controllers/getAllUsers");

const upload = require("../middleware/multer");

const router = Router();

router.get("/", getCategory);

router.get("/products", getProducts);
router.get("/products/:id", getProductById);

router.post("/products", upload.single("image"), postProduct);

router.get("/user", getAllUsers);
router.post("/user", postUser);

module.exports = router;

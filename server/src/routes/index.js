const { Router } = require("express");
const getCategory = require("../controllers/getCategory");
const { getProducts, getProductById } = require("../controllers/getProduct");
const { postProduct } = require("../controllers/postProduct");
const { postUser } = require("../controllers/postUser");
const { postPreference } = require("../controllers/postPreference")

const upload = require("../middleware/multer");

const router = Router();

router.get("/", getCategory);

router.get("/products", getProducts);
router.get("/products/:id", getProductById);

router.post("/products", upload.single("image"), postProduct);
router.post("/create_preference", postPreference);
router.post("/user", postUser);

module.exports = router;

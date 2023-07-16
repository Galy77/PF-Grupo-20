const { Router } = require("express");
const getCategory = require("../controllers/getCategory");
const { getProducts, getProductById, getReviewByIdProduct } = require("../controllers/getProduct");
const { postProduct } = require("../controllers/postProduct");
const { postUser } = require("../controllers/postUser");
<<<<<<< HEAD
const { postContacto } = require("../controllers/postContacto");
//const { postEmail } = require("../controllers/postEmail");

=======
const { postPreference } = require("../controllers/postPreference")
const { postReview } = require("../controllers/postReview")
const { handlePaymentUpload } = require("../controllers/paymentController");
>>>>>>> 19bfeda8bf9e4116814f298a1d519e62f08ecc1e
const upload = require("../middleware/multer");

const router = Router();

router.get("/", getCategory);

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.get("/review/:id", getReviewByIdProduct);

router.post("/products", upload.single("image"), postProduct);
router.post("/create_preference", postPreference);
router.post("/user", postUser);
router.post("/review",postReview)
router.post("/webhook", handlePaymentUpload);

router.post("/contacto", postContacto);

module.exports = router;

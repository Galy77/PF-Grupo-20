const { Router } = require("express");
const {getCategory} = require("../controllers/getCategory");
const { getProducts, getProductById, getReviewByIdProduct } = require("../controllers/getProduct");
const { postProduct } = require("../controllers/postProduct");
const { putStockProduct } = require("../controllers/putStockProduct")

const { postUser } = require("../controllers/postUser");

const { getFirebaseUser, getUserBDD } = require("../controllers/getUserByEmail");
const { postUserFirebase } = require("../controllers/postUserFirebase");

const { postContacto } = require("../controllers/postContacto");

const { postPreference } = require("../controllers/postPreference")
const { postReview } = require("../controllers/postReview")
const { handlePaymentUpload, uploadProduct, getPaymentByUserId, createPayment } = require("../controllers/paymentController");


const upload = require("../middleware/multer");

const router = Router();

router.get("/", getCategory);

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.get("/review/:id", getReviewByIdProduct);

router.post("/products", upload.single("image"), postProduct);

router.get("/user/bdd", getUserBDD);
router.get("/user/firebase", getFirebaseUser);
router.get("/payment/:id", getPaymentByUserId);


router.post("/user", postUser);
router.post("/user/firebase", postUserFirebase);

router.post("/create_preference", postPreference);
router.post("/user", postUser);
router.post("/review",postReview)
router.post("/payment",createPayment)

router.post("/webhook", handlePaymentUpload);

router.post("/contacto", postContacto);

router.put("/products/:id", putStockProduct);
router.put("/payment/:id", uploadProduct)

module.exports = router;

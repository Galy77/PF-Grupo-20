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


const { postReview, removeReview } = require("../controllers/postReview")

const { handlePaymentUpload, getPaymentByUserId, createPayment } = require("../controllers/paymentController");
const { postCart, getCartById, putCartById } = require("../controllers/postCart");

const { postCategory } = require("../controllers/postCategory");


const upload = require("../middleware/multer");
const { putRatingProduct } = require("../controllers/putRatingProduct");

const router = Router();
/**
 * para el dashboard
*/
const { putProduct } = require("../controllers/putProduct");
const { putCategory } = require("../controllers/putCategory");
const { getAllUsers } = require("../controllers/getAllUsers");
const { putUser } = require("../controllers/putUser");


router.get("/", getCategory);

router.get("/products", getProducts);
router.get("/products/:id", getProductById);

router.get("/review/:id", getReviewByIdProduct);
router.get("/cart/:id", getCartById);


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
router.post("/cart",postCart)



router.post("/webhook", handlePaymentUpload);

router.post("/webhook", handlePaymentUpload);
router.post("/contacto", postContacto);

router.put("/rating/:id", putRatingProduct);
router.put("/products/:id", putStockProduct);
router.put("/cart/:id", putCartById);
router.delete("/review",removeReview)



// para el dashboard Productos , Usuarios y categorias

//Categorias
router.post("/category",postCategory);
router.put("/category/:id", putCategory);

// Productos
// router.put("/products/:id", upload.single("image"), putProduct);

// User
router.get("/user", getAllUsers);
router.put("/user/:id",putUser);


module.exports = router;

// get y put Review ? 

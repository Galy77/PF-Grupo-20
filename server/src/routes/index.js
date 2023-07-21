const { Router } = require("express");
const {getCategory} = require("../controllers/getCategory");
const { getProducts, getProductById, getReviewByIdProduct } = require("../controllers/getProduct");
const { postProduct } = require("../controllers/postProduct");
const { postUser } = require("../controllers/postUser");

const { getFirebaseUser, getUserBDD } = require("../controllers/getUserByEmail");
const { postUserFirebase } = require("../controllers/postUserFirebase");

const { postContacto } = require("../controllers/postContacto");

const { postPreference } = require("../controllers/postPreference")
const { postReview } = require("../controllers/postReview")
const { handlePaymentUpload } = require("../controllers/paymentController");

const { postCategory } = require("../controllers/postCategory");

const upload = require("../middleware/multer");

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
// router.get("/review/:id", getReviewByIdProduct);

router.post("/products", upload.single("image"), postProduct);

router.get("/user/bdd", getUserBDD);
router.get("/user/firebase", getFirebaseUser);

router.post("/user", postUser);
router.post("/user/firebase", postUserFirebase);

router.post("/create_preference", postPreference);
router.post("/user", postUser);
router.post("/review",postReview);

router.post("/webhook", handlePaymentUpload);

router.post("/webhook", handlePaymentUpload);
router.post("/contacto", postContacto);

// para el dashboard Productos , Usuarios y categorias

//Categorias
router.post("/category",postCategory);
router.put("/category/:id", putCategory);

// Productos
router.put("/products/:id", upload.single("image"), putProduct);

// User
router.get("/user", getAllUsers);
router.put("/user/:id",putUser);

module.exports = router;

// get y put Review ? 

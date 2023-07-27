const { Router } = require("express");
const {getCategory} = require("../controllers/getCategory");
const { getProducts, getProductById, getReviewByIdProduct, getAllProducts } = require("../controllers/getProduct");
const { postProduct } = require("../controllers/postProduct");

const { putStockProduct } = require("../controllers/putStockProduct");

const { postUser } = require("../controllers/postUser");

const { getFirebaseUser, getUserBDD } = require("../controllers/getUserByEmail");
const { postUserFirebase } = require("../controllers/postUserFirebase");

const { postContacto } = require("../controllers/postContacto");

const { postPreference } = require("../controllers/postPreference")

const { postReview, removeReview, getUserReviewsById } = require("../controllers/postReview")

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
const { getAllUsers, getUsers } = require("../controllers/getAllUsers");
const { putUser } = require("../controllers/putUser");
const {putFirebaseUser} = require("../controllers/putFirebaseUser")


router.get("/", getCategory);

router.get("/products", getProducts);
router.get("/products/:id", getProductById);



router.post("/products", upload.single("image"), postProduct);

router.get("/user/bdd", getUserBDD);
router.get("/user/firebase", getFirebaseUser);
router.get("/payment/:id", getPaymentByUserId); //nuevo
router.get("/review_user/:id", getUserReviewsById); //nuevo


router.post("/user", postUser); //veo 1
router.post("/user/firebase", postUserFirebase);

router.post("/create_preference", postPreference);

// Estas rutas necesito
router.get("/review/:id", getReviewByIdProduct);
router.get("/cart/:id", getCartById);
router.get("/payment/:id", getPaymentByUserId);
router.post("/payment",createPayment)
router.post("/cart",postCart)
router.post("/review",postReview)
router.put("/cart/:id", putCartById);
router.put("/rating/:id", putRatingProduct);
router.put("/products/:id", putStockProduct);
router.delete("/review",removeReview)


// router.post("/webhook", handlePaymentUpload); // veo 1
// router.post("/webhook", handlePaymentUpload); // veo 2
router.post("/contacto", postContacto);




// para el dashboard Productos , Usuarios y categorias

//Categorias
router.get("/productsAll", getAllProducts);
router.post("/category",postCategory);
router.put("/category/:id", upload.single("image"), putCategory);

//Products manipular todo
router.put("/product/:id", upload.single("image"), putProduct);

// Productos
// router.put("/products/:id", upload.single("image"), putProduct);

// User
router.get("/user", getUsers);
router.get("/userAll", getAllUsers);
router.put("/user/:id", upload.single("image"), putUser);
router.put("/firebase/:id", putFirebaseUser)

//profile Routes


module.exports = router;

// get y put Review ? 

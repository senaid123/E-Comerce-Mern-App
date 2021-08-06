const express  = require("express");
const router = express.Router();

const {userById} = require("../controller/user");
const{create,productById,read,update,remove,list,listRelated,listCategories,listBySearch,photo,listSearch} = require("../controller/product");
const {isAdmin,isAuth,requireSignin} = require("../controller/auth");


router.get("/product/:productId", read);
router.post("/product/create/:userId", requireSignin,isAdmin,isAuth,create);
router.delete("/product/:productId/:userId", requireSignin,isAdmin,isAuth,remove);
router.put("/product/:productId/:userId", requireSignin,isAdmin,isAuth,update);
router.delete("/product/:productId/:userId", requireSignin,isAdmin,isAuth,remove);
router.get("/products",list);
router.get("/products/search", listSearch);
router.get("/products/related/:productId",listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
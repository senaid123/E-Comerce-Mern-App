const express = require("express");
const router = express.Router();


const {create,categoryById,read,update,list} = require("../controller/category");
const {isAuth, isAdmin, requireSignin} = require("../controller/auth");
const {userById} = require("../controller/user");

router.get("/category/:categoryId", read);

router.post("/category/create/:userId",requireSignin, isAuth, isAdmin,create);
router.put("/category/create/:userId",requireSignin, isAuth, isAdmin,update);
router.get("/categories", list);

router.param("categoryId", categoryById);
router.param("userId", userById);

module.exports = router;
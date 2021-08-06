const express = require("express");
const router = express.Router();

const {requireSignin, isAuth,isAdmin} = require("../controller/auth")

const {userById,read,update} = require("../controller/user");

router.get("/secret/:userId", requireSignin,isAuth,isAdmin,(req,res)=>{
    res.json({
        user: req.profile
    })
})


router.get("/user/:userId", requireSignin,isAuth, read);
router.get("/user/:userId", requireSignin,isAuth, update);

router.param("userId", userById);

module.exports = router;
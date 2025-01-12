const express = require("express");
const router = express.Router();
const {body} = require('express-validator');
const { registerUser, loginUser, userProfile, logoutUser } = require("../controller/user.controller");
const { authUser } = require("../middlewares/auth.middleware");

router.post("/register",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min:3}).withMessage("First Name Must Be at least 3 character long"),
    body("password").isLength({min:6}).withMessage("Password Must Be at least 6 character long"),
],registerUser)

router.post("/login",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min:6}).withMessage("Password Must Be at least 6 character long")
], loginUser)

router.get("/profile",authUser,userProfile)

router.post("/logout",logoutUser)
module.exports = router
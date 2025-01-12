const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerCaptain, getCaptainProfile, loginCaptain, logoutCaptain } = require("../controller/captain.controller");
const { authCaptain } = require("../middlewares/auth.middleware");

router.post("/register", [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("First Name must be at least 3 character long"),
    body('password').isLength({ min: 6 }).withMessage("Password must be at lesat 6 character long"),
    body('vehicle.color').isLength({ min: 3 }).withMessage("Vehicle Color must be at lesat 6 character long"),
    body('vehicle.plate').isLength({ min: 3 }).withMessage("Plate no must be at lesat 6 character long"),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage("Capacity must be at lesat 1"),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage("Invalid Vehicle Type")
], registerCaptain)

router.post('/login',loginCaptain)
router.get('/profile',authCaptain, getCaptainProfile)
router.post('/logout',logoutCaptain)

module.exports = router;

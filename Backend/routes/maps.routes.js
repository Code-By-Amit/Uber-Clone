const express = require("express");
const router = express.Router();
const { authUser } = require("../middlewares/auth.middleware");
const { getCoordinates,getDistanceTime,getAutoCompleteSuggestion } = require("../controller/maps.controller");
const { query } = require('express-validator')


router.get('/get-cordinates', query('address').isString().isLength({ min: 3 }), authUser, getCoordinates)
router.get('/get-distance-time', query('origin').isString().isLength({ min: 3 }),query('destination').isString().isLength({ min: 3 }), authUser, getDistanceTime)
router.get('/get-suggestion', query('input').isString().isLength({ min: 3 }), authUser, getAutoCompleteSuggestion)

module.exports = router
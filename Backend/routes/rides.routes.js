const express = require('express')
const router = express.Router();


router.post('/create',
    body('userId').isString().isLength({min:24,max:24}).withMessage('Invalid user id'),
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup Address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid Destination add')
)

module.exports = router;
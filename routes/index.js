const express = require('express');

const notificationRouter = require('./phoneVerify.routes')
const mailRouter = require('./sendmail.routes')
const stripeRouter = require('./stripe.routes')

const router = express.Router();

router.use('/phoneVerify', notificationRouter);
router.use('/problem', mailRouter)
router.use('/pricing', stripeRouter)

module.exports = router;
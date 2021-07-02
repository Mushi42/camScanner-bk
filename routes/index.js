const express = require('express');

const notificationRouter = require('./phoneVerify.routes')
const mailRouter = require('./sendmail.routes')
const stripeRouter = require('./stripe.routes')
const infoRouter = require('./info.routes')

const router = express.Router();

router.use('/phoneVerify', notificationRouter);
router.use('/problem', mailRouter)
router.use('/pricing', stripeRouter)
router.use('/info', infoRouter)

module.exports = router;
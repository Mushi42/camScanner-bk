const express = require('express');

const notificationRouter = require('./phoneVerify.routes')
const mailRouter = require('./sendmail.routes')

const router = express.Router();

router.use('/phoneVerify', notificationRouter);
router.use('/problem', mailRouter)

module.exports = router;
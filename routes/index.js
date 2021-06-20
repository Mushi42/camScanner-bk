const express = require('express');

const notificationRouter = require('./phoneVerify.routes')

const router = express.Router();

router.use('/phoneVerify', notificationRouter);

module.exports = router;
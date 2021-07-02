const express = require("express");

const { phoneVerifyController } = require("../controllers");

const router = express.Router();

router.post("/sendCode", phoneVerifyController.sendCode);
router.post("/verifyCode", phoneVerifyController.verifyCode);


module.exports = router;
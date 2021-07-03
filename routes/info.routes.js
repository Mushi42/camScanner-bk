const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/sendinfo", async (req, res) => {
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'musharaf42@gmail.com', // generated ethereal user
            pass: 'yijpltidremhixwk', // generated ethereal password
        },
    });

    // send mail with defined transport object  
    let info = await transporter.sendMail({
        from: req.body.email, // sender address
        to: 'haconstructions@hotmail.com', // list of receivers
        subject: "User Info", // Subject line
        text: `Name : ${req.body.name}\Phone : ${req.body.phone}\nAddress : ${req.body.address}`
    });

    res.send(info)
});

module.exports = router

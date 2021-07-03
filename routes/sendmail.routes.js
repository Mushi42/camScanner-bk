const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/sendMail", async (req, res) => {
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'haconstructions1976@gmail.com', // generated ethereal user
            pass: 'nxqopikspxffxotx', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'haconstructions1976@gmail.com', // sender address
        to: 'haconstructions@hotmail.com', // list of receivers
        subject: "Problem", // Subject line
        text: `Name : ${req.body.name}\nHouse : ${req.body.house}\nProblem : ${req.body.problem}`
    });

    res.send(info)
});

module.exports = router
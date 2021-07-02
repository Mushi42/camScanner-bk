const { setResponse } = require("../helpers");
const { phoneVerifyService } = require("../services");

const sendCode = async (req, res) => {
    try {
        const data = await phoneVerifyService.sendCode(req);
        console.log(data)
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: "serverError" });
    }
};

const verifyCode = async (req, res) => {
    try {
        const data = await phoneVerifyService.verifyCode(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: "serverError" });
    }
};


module.exports = {
    sendCode,
    verifyCode
};

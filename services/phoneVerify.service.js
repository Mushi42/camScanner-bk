// const accountSid = process.env.TWILIO_ACCOUNT_SID;
const accountSid = 'AC3088fdfb9705bfe178a5f439fed8269d';
// const authToken = process.env.TWILIO_ACCOUNT_AUTHTOKEN;
const authToken = 'c5ab39c64ccc29d932ba255b5715401c';
const client = require('twilio')(accountSid, authToken);

const sendCode = async (req) => {
    try {
        console.log('Phone number...', req.body.phoneNumber)
        return new Promise((resolve, reject) => {
            client.verify.services('VAfe017439e37f300dbf0686fe8a252ef0')
                .verifications
                .create({ to: req.body.phoneNumber, channel: 'sms' })
                .then(verification => {
                    console.log(verification.sid)
                    resolve({ type: 'success', message: `Sent`, data: verification.sid })
                });
        })
    } catch (error) {
        throw error;
    }
};

const verifyCode = async (req) => {
    try {
        return new Promise((resolve, reject) => {
            client.verify.services('VAfe017439e37f300dbf0686fe8a252ef0')
                .verificationChecks
                .create({ to: req.body.phoneNumber, code: req.body.code })
                .then(verification_check => {
                    console.log(verification_check.status)
                    resolve({ type: 'success', message: `Verified`, data: verification_check.status })
                });
        })
    } catch (error) {
        throw error;
    }
};



module.exports = {
    sendCode,
    verifyCode
}
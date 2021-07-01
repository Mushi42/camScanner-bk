// const accountSid = process.env.TWILIO_ACCOUNT_SID;
const accountSid = 'ACa3431b4db40dfc4ef2ac4a1a3394cc1a';
// const authToken = process.env.TWILIO_ACCOUNT_AUTHTOKEN;
const authToken = 'e3977fb7f3eaec37165c92802b84ea75';
const client = require('twilio')(accountSid, authToken);
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



const sendCode = async (req) => {
    try {
        console.log('Phone number...', req.body.phoneNumber)
        return new Promise((resolve, reject) => {
            client.verify.services('VAc320f193aa50883c7ead2caa20f04cf1')
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
            client.verify.services('VAc320f193aa50883c7ead2caa20f04cf1')
                .verificationChecks
                .create({ to: req.body.phoneNumber, code: req.body.code })
                .then(verification_check => {
                    console.log(verification_check.status)
                    MongoClient.connect(url, function (err, db) {
                        if (err) throw err;
                        var dbo = db.db("camScannerDB");
                        var myobj = { phone: req.body.phoneNumber, verified: true, createdAt: new Date(), subscribed: false, subscribedAt: '' };
                        dbo.collection("camScannerCol").insertOne(myobj, function (err, res) {
                            if (err) throw err;
                            console.log("1 document inserted");
                            db.close();
                        });
                    });
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
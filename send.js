// const accountSid = process.env.TWILIO_ACCOUNT_SID;
const accountSid = 'ACa3431b4db40dfc4ef2ac4a1a3394cc1a';
// const authToken = process.env.TWILIO_ACCOUNT_AUTHTOKEN;
const authToken = 'e3977fb7f3eaec37165c92802b84ea75';
const client = require('twilio')(accountSid, authToken);

// client.verify.services('VAc320f193aa50883c7ead2caa20f04cf1')
//     .verifications
//     .create({ to: '+923013162248', channel: 'sms' })
//     .then(verification => console.log(verification.sid));


client.verify.services(process.env.TWILIO_PHONE_VERIFICATION_SERVICE_ID)
    .verificationChecks
    .create({ to: '+923013162248', code: '590199' })
    .then(verification_check => console.log(verification_check.status))
    .catch(err => {
        console.log(err)
    })
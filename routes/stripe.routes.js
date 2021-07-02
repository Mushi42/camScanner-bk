const express = require("express");
const Stripe = require('stripe')
const { v4: uuidv4 } = require('uuid')

const stripe = new Stripe('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')
const router = express.Router();

router.post("/makePayment", async (req, res) => {
    const { email, authToken, price } = req.body;
    const { token } = authToken;
    const { card } = token;

    console.log(card);

    console.log("============================================== payment initiate =======================")

    // unique ID generated by client
    const idempotencyKey = uuidv4()

    try {
        const customer = await stripe.customers.create({
            email: email,
            source: token.id
        })

        console.log('Customer Created.....')
        console.log(customer)

        const response = await stripe.charges.create({
            amount: price * 100,
            currency: 'USD',
            customer: customer.id,
            receipt_email: email,
            description: 'this is a payment from application',
            shipping: {
                name: card.name,
                address: {
                    line1: "Pakistan",
                    country: card.address_country,
                }
            }

        }, { idempotencyKey: idempotencyKey })

        console.log("charge response")
        console.log(response)



        res.json(response)

    } catch (err) {
        console.log("=========================================== error ==========================")
        console.log(err)
        res.json(err)
    }

});

module.exports = router
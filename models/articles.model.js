const mongoose = require('mongoose')

const articlesSchema = new mongoose.Schema({
    userRef: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        required: true
    },
    productImage: {
        type: String
    },
    techPackImage: {
        type: String
    },
    styleNumber: {
        type: Number
    },
    itemNumber: {
        type: Number
    },
    fabricContent: {
        type: String
    },
    description: {
        type: String
    },
    modeType: {
        type: String
    },
    colorCount: {
        type: Number
    },
    designFile: [],
    deliveryDate: {
        type: Date,
        default: new Date()
    },
    isFitSample: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date
    }
})

const ARTICLES = mongoose.model('articles', articlesSchema)
module.exports = ARTICLES
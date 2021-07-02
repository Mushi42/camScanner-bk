const mongoose = require('mongoose');

const customersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String
    },
    factory: {
        type: String
    },
    empId: {
        type: Number,
        unique: true
    },
    location: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date
    },
    updatedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    }
});

const CUSTOMERS = mongoose.model('customers', customersSchema);
module.exports = CUSTOMERS;
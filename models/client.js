const mongoose = require('mongoose')

var ClientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
    },
    code: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    registeredDate: {
        type: Date,
        default: Date.now()
    },
    expiredDate: {
        type: Date,
    }
});

var Admin = module.exports = mongoose.model('admin', adminSchema);

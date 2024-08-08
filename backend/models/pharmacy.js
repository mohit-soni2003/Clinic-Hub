const mongoose = require('mongoose');

const pharmacyStoreSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    logoLink: {
        type: String,
        // required: true
    },
    address: {  
        type: String,
        // required: true
    },
    city:{
        type:String
    },
    openingTime: {
        type: String,
        // required: true
    },
    closingTime: {
        type: String,
        // required: true
    },
    paymentModesAccepted: {
        type: [String],
        enum: ['Cash', 'Online', 'Cash-On-Delievery'],
        // required: true
    },
    deliveryType: {
        type: String,
        enum: ['Instant', 'Normal'],
        // required: true
    },
    isOpen24Hours: {
        type: Boolean,
        // required: true
    }
});

const PharmacyStore = mongoose.model('PharmacyStore', pharmacyStoreSchema);

module.exports = PharmacyStore;

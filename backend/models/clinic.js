const mongoose = require('mongoose');
const { Schema } = mongoose;


const clinicSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    doctorpresent:{
        type : Schema.Types.ObjectId,
        ref: 'Doctor',
        // required:true,
    },
    image: {
        type: String,
        // required: true
    },
    status: {
        type: String,
        // required: true
    },

    city: {
        type: String,
        // required: true
    },
    rating: {
        type: String,
        // required: true
    },
    waiting:{
        type:Number,
        // required:true
    }
});

const Clinic = mongoose.model('Clinic', clinicSchema);

module.exports = Clinic;

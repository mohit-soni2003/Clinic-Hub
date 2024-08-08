const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    image: {
        type: String,
        // required: true
    },
    qualification: {  
        type: String,
        // required: true
    },
    fees:{
        type:String
    },
    status: {
        type: String,
        // required: true
    },
    speciality: {
        type: String,
        // required: true
    },
    gender: {
        type: String,
        enum: ['male','female','other'],
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    experience: {
        type: String,
        // required: true
    },
    rating: {
        type: String,
        // required: true
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;

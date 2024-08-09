const mongoose = require('mongoose');
const PharmacyStore = require('./models/pharmacy');
const Doctor = require('./models/doctor');
const Clinic = require('./models/clinic');
const url = "mongodb+srv://2mohitsoni:Mohit1234@cluster0.wjfspkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected");

        const stores = [
            {
                name: "Sunshine Clinic",
                doctorpresent: "66b5005952956c7d972117cd",
                image: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-07/03/full/1435926739-5814.jpg",
                status: "Open",
                city: "Indore",
                rating: "4.5",
                waiting: 15
            },
            {
                name: "HealthCare Center",
                doctorpresent: "66b5005952956c7d972117cb",
                image: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-07/03/full/1435926739-5814.jpg",
                status: "Closed",
                city: "Bhopal",
                rating: "4.2",
                waiting: 30
            },
            {
                name: "City Medical Clinic",
                doctorpresent: "66b5005952956c7d972117c9",
                image: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-07/03/full/1435926739-5814.jpg",
                status: "Open",
                city: "Pune",
                rating: "4.7",
                waiting: 10
            },
            {
                name: "Healing Hands Clinic",
                doctorpresent: "66b5005952956c7d972117ca",
                image: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-07/03/full/1435926739-5814.jpg",
                status: "Open",
                city: "Mumbai",
                rating: "4.8",
                waiting: 5
            },
            {
                name: "Carewell Clinic",
                doctorpresent: "66b5005bd3ab44a1fa497922",
                image: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-07/03/full/1435926739-5814.jpg",
                status: "Closed",
                city: "Delhi",
                rating: "4.3",
                waiting: 25
            },
            {
                name: "Family Health Clinic",
                doctorpresent: "66b5005bd3ab44a1fa497920",
                image: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-07/03/full/1435926739-5814.jpg",
                status: "Open",
                city: "Kolkata",
                rating: "4.6",
                waiting: 20
            },
            {
                name: "MediCare Clinic",
                doctorpresent: "66b5005bd3ab44a1fa497924",
                image: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-07/03/full/1435926739-5814.jpg",
                status: "Closed",
                city: "Chennai",
                rating: "4.4",
                waiting: 18
            },
            {
                name: "HealthyLife Clinic",
                doctorpresent: "66b5005bd3ab44a1fa497921",
                image: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-07/03/full/1435926739-5814.jpg",
                status: "Open",
                city: "Hyderabad",
                rating: "4.9",
                waiting: 8
            },
            {
                name: "Wellness Clinic",
                doctorpresent: "66b5005bd3ab44a1fa497923",
                image: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-07/03/full/1435926739-5814.jpg",
                status: "Closed",
                city: "Bangalore",
                rating: "4.1",
                waiting: 12
            },
            {
                name: "CureAll Clinic",
                doctorpresent: "66b5005bd3ab44a1fa497923",
                image: "https://bsmedia.business-standard.com/_media/bs/img/article/2015-07/03/full/1435926739-5814.jpg",
                status: "Open",
                city: "Ahmedabad",
                rating: "4.7",
                waiting: 22
            }
        ]
        

        return Clinic.insertMany(stores);
    })
    .then(stores => {
        console.log("Stores Saved:", stores);
    })
    .catch(err => {
        console.error("Error:", err);
    })
    .finally(() => {
        mongoose.connection.close();
    });

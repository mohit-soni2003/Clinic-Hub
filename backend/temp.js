const mongoose = require('mongoose');
const PharmacyStore = require('./models/pharmacy');
const Doctor = require('./models/doctor');
const url = "mongodb+srv://2mohitsoni:Mohit1234@cluster0.wjfspkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected");

        const stores = [
            {
                name: "Dr. John Doe",
                image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
                qualification: "MBBS, MD",
                fees: "500",
                status: "available",
                speciality: "Cardiologist",
                gender: "male",
                experience: "10 years",
                rating: true,
                city: "Indore"
            },
            {
                name: "Dr. Jane Smith",
                image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
                qualification: "MBBS, MS",
                fees: "700",
                status: "available",
                speciality: "Neurologist",
                gender: "female",
                experience: "12 years",
                rating: true,
                city: "Ujjain"
            },
            {
                name: "Dr. Emily White",
                image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
                qualification: "MBBS, DGO",
                fees: "400",
                status: "unavailable",
                speciality: "Gynecologist",
                gender: "female",
                experience: "8 years",
                rating: true,
                city: "Bhopal"
            },
            {
                name: "Dr. Robert Brown",
                image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
                qualification: "MBBS, MCh",
                fees: "600",
                status: "available",
                speciality: "Orthopedic Surgeon",
                gender: "male",
                experience: "15 years",
                rating: true,
                city: "Jabalpur"
            },
            {
                name: "Dr. Alex Green",
                image: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
                qualification: "MBBS, MD",
                fees: "450",
                status: "available",
                speciality: "Pediatrician",
                gender: "other",
                experience: "10 years",
                rating: false, 
                city: "Indore"
            }
        ]
        ;

        return Doctor.insertMany(stores);
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

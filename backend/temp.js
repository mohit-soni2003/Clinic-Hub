const mongoose = require('mongoose');
const PharmacyStore = require('./models/pharmacy');
const url = "mongodb+srv://2mohitsoni:Mohit1234@cluster0.wjfspkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected");

        const stores = [
            {
                name: "HealthPlus Pharmacy",
                logoLink: "http://example.com/logo1.png",
                address: "123 Main St, Indore, India",
                city: "Indore",
                openingTime: "08:00",
                closingTime: "22:00",
                paymentModesAccepted: ["Cash", "Online"],
                deliveryType: "Instant",
                isOpen24Hours: false
            },
            {
                name: "Wellness Pharmacy",
                logoLink: "http://example.com/logo2.png",
                address: "456 Maple Ave, Ujjain, India",
                city: "Ujjain",
                openingTime: "09:00",
                closingTime: "21:00",
                paymentModesAccepted: ["Cash"],
                deliveryType: "Normal",
                isOpen24Hours: true
            },
            {
                name: "Family Health Pharmacy",
                logoLink: "http://example.com/logo3.png",
                address: "789 Oak St, Bhopal, India",
                city: "Bhopal",
                openingTime: "07:00",
                closingTime: "23:00",
                paymentModesAccepted: ["Online"],
                deliveryType: "Instant",
                isOpen24Hours: false
            },
            {
                name: "CareFirst Pharmacy",
                logoLink: "http://example.com/logo4.png",
                address: "101 Pine St, Jabalpur, India",
                city: "Jabalpur",
                openingTime: "10:00",
                closingTime: "20:00",
                paymentModesAccepted: ["Cash", "Online"],
                deliveryType: "Normal",
                isOpen24Hours: true
            },
            {
                name: "Healthy Life Pharmacy",
                logoLink: "http://example.com/logo5.png",
                address: "202 Birch St, Indore, India",
                city: "Indore",
                openingTime: "08:00",
                closingTime: "22:00",
                paymentModesAccepted: ["Cash", "Online"],
                deliveryType: "Instant",
                isOpen24Hours: false
            },
            {
                name: "PharmaCare",
                logoLink: "http://example.com/logo6.png",
                address: "303 Cedar St, Ujjain, India",
                city: "Ujjain",
                openingTime: "09:00",
                closingTime: "21:00",
                paymentModesAccepted: ["Cash"],
                deliveryType: "Normal",
                isOpen24Hours: true
            },
            {
                name: "Trust Pharmacy",
                logoLink: "http://example.com/logo7.png",
                address: "404 Elm St, Bhopal, India",
                city: "Bhopal",
                openingTime: "07:00",
                closingTime: "23:00",
                paymentModesAccepted: ["Online"],
                deliveryType: "Instant",
                isOpen24Hours: false
            },
            {
                name: "QuickMed Pharmacy",
                logoLink: "http://example.com/logo8.png",
                address: "505 Spruce St, Jabalpur, India",
                city: "Jabalpur",
                openingTime: "10:00",
                closingTime: "20:00",
                paymentModesAccepted: ["Cash", "Online"],
                deliveryType: "Normal",
                isOpen24Hours: true
            },
            {
                name: "Neighborhood Pharmacy",
                logoLink: "http://example.com/logo9.png",
                address: "606 Willow St, Indore, India",
                city: "Indore",
                openingTime: "08:00",
                closingTime: "22:00",
                paymentModesAccepted: ["Cash", "Online"],
                deliveryType: "Instant",
                isOpen24Hours: false
            },
            {
                name: "City Health Pharmacy",
                logoLink: "http://example.com/logo10.png",
                address: "707 Fir St, Ujjain, India",
                city: "Ujjain",
                openingTime: "09:00",
                closingTime: "21:00",
                paymentModesAccepted: ["Cash"],
                deliveryType: "Normal",
                isOpen24Hours: true
            }
        ];

        return PharmacyStore.insertMany(stores);
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

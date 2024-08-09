const express = require("express")
const mongoose = require("mongoose");
const PharmacyStore = require("./models/pharmacy");
const Doctor = require("./models/doctor");
const Clinic = require("./models/clinic");
const app = express();
const port = 5000;
const cors =require("cors")
const url = "mongodb+srv://2mohitsoni:Mohit1234@cluster0.wjfspkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


//-------MongoDb connnection-----------
mongoose.connect(url)
mongoose.connection.on('connected', () => console.log('MongoDb Atlas Connected Successful'));
mongoose.connection.on("error", () => { console.log("Not Connected To Database......") })

app.use(express.json()); // Middleware to parse JSON
app.use(cors())


app.get("/", (req, res) => {
    res.json({ Message: "Server IS Working Correctly " })
})


//fetching details of pharma 
app.post("/search", async (req, res) => {
    console.log("search request hitted")
    const { city, serviceType, name } = req.body
    console.log(req.body)
    try {
        if (serviceType === 'pharmacy' && !city) {
            const data = await PharmacyStore.find({})
            console.log("insearch 1 pharma without city")
            return res.json(data)
        }
        else if (serviceType == "pharmacy" && city) {
            const data = await PharmacyStore.find({ city : city});
            console.log("insearch 2 pharma with city")
            return res.json(data)
        }
        else if (serviceType == "doctor" && !city) {
            const data = await Doctor.find({});
            console.log("insearch 1 doctor withot city")
            return res.json(data)
        }
        else if (serviceType == "doctor" && city) {
            const data = await Doctor.find({city:city});
            console.log("insearch 2 doctor with city")
            return res.json(data)
        }
        else if (serviceType == "clinic" && !city) {
            const data = await Clinic.find({});
            console.log("insearch 1 doctor withot city")
            return res.json(data)
        }
        else if (serviceType == "clinic" && city) {
            const data = await Clinic.find({city:city});
            console.log("insearch 2 doctor with city")
            return res.json(data)
        }
        else{
            return res.json({message : "No Data Found"})
        }
    } catch (err) {
        console.log(err) 
        res.json({ error: "Currentry Cannot the Data" })
    }
})

app.listen(port, () => {
    console.log(`Server is Listening....on port ......${port}`)
})





// const {name, logoLink, address, openingTime, closingTime, paymentModesAcepted, delieveryType, isOpen24Hours} = req.body



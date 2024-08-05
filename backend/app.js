const express = require("express")
const app=express();
const port = 5000;

app.get("/",(req,res)=>{
    res.json({Message : "Server IS Working Correctly "})
})


app.listen(port,()=>{
    console.log("Server is Listening....")
})
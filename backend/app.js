const express = require("express")
const app=express();
const port = 5000;

app.get("/",(req,res)=>{
    res.send("Its Default Route of Testing")
})

app.listen(port,()=>{
    console.log("Server is Listening....")
})
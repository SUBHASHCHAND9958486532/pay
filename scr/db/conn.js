const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/payment_status")
.then(()=>{
    console.log("connection is ok");
}).catch((err)=>{
    console.log("No connection")
})
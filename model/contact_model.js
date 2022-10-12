const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    ContactId:{
        type:Number
    },
    Name:{
        type:String,
       
    },
    Email:{
        type:String,
       
    },
    Mobile:{
        type:Number,
        
    },
    Message:{
        type:String,
       
    },
},{
timestamps:true
})
module.exports = mongoose.model("contact",contactSchema)
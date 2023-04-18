const mongoose = require("mongoose")

const Schema = mongoose.Schema

const studentModel = new Schema({
    name:{
        type:String,
        required: true,
    },
    rollnum: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    }
}, { timestamps:true } )

module.exports = mongoose.model("student", studentModel)
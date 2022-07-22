const mongoose = require("mongoose");
const validator = require("validator")


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    emailID: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Wrong email id please check !")
            }
        }
    },
    phoneNumber:{
        type:Number,
        required: true,
        min:10,
        unique: true,
    },
    address:{
        type:String,
        required: true,
    }
})

// collection in database start
const Student = new mongoose.model('Student', studentSchema);
// collection in database start


module.exports = Student;
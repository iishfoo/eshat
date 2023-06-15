const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AppointmentModel = new Schema({
    selectProblem:{
        type:String,
        required:true,
    },
    selectSpecialst:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('AppointmentModel',AppointmentModel);
const appointment = require('./../models/appointmentModel');
const catchAsyncErrors = require('./../middleware/catchAsyncErrors');
exports.uploadAppointment = catchAsyncErrors(
    async(req,res)=>{
        try{
            await appointment.create({
                selectProblem:req.body.selectProblem,
                selectSpecialst:req.body.selectProblem,
                date:req.body.date,
                time:req.body.time,
                fullName:req.body.fullName,
                phoneNumber:req.body.phoneNumber,
                message:req.body.message
            })
            res.status(200).json("Appointment has been submitted");
        }catch(err){
            return res.status(500).json(err.message);
        }
    }
)
exports.fetchAllData = catchAsyncErrors(
    async(req,res)=>{
        try{
            const fetchAllDataApp =await appointment.find();
            return res.status(200).json(fetchAllDataApp)
        }catch(err){
            return res.status(500).json(err.message);
        }
    }
)
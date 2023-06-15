const express = require('express');
const {createDoctor} = require('./../controller/doctorController');
const multerDoctor = require('./../middleware/multer');
const {uploadAppointment,fetchAllData} = require('./../controller/appointmentController');
const router = express.Router();
router.post("/adddoctor/doctor",multerDoctor.array('image'),createDoctor);
router.post('/appointment/upload',uploadAppointment);
router.get('/fetch/All/appointment',fetchAllData);

module.exports=router;
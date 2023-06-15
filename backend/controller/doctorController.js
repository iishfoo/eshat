const Doctor = require("./../models/doctorModel/doctorModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const fs = require('fs');
const path = require('path');
const multer = require('multer');
//Create 
exports.createDoctor = catchAsyncErrors(
  async (req, res) => {
    console.log(req.body);
    console.log(req.files)
    try {
      // const checkuser = await Registration.findById(req.params.userId);
      // if (!checkuser) {
      //     res.status(400).send("User not found");
      // }
      // const folderName = checkuser.userName.replace(/\s+/g, "-").toLowerCase();
      const finalName = path.join(__dirname, "..", "images", "doctor");
      if (!fs.existsSync(finalName)) {
          fs.mkdirSync(finalName, { recursive: true })
      }
      const storage = multer.diskStorage({
          destination: finalName,
          filename: function (req, file, cb) {
              cb(null, Date.now() + "-" + file.originalname);
          },
      });
      const files = [];
      for (const file of req.files) {
          files.push({ url: 'http://localhost:3000' + '/images/doctor/' + file.filename });
      }
      const upload =await Doctor
        .create({
          name: req.body.name,
          Specialst: req.body.Specialst,
          image: files,
        })
       
          res.status(200).json("doctor details added successfully");
 
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
)


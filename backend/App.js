const express = require('express');
const errorMiddleware = require("./middleware/error")
const app = express();
const cors=require("cors");
app.use(express.json());
const corsOptions ={
    origin:"*",
    Credential:true,
    optionsSuccessStatus:200
}
//Routes Imports
const routes = require('./routes/routes');
app.use(cors(corsOptions));
app.use("/api", routes)
app.use(express.urlencoded({ extended: true }));
//Middleware for Errors
app.use(errorMiddleware);


module.exports = app;
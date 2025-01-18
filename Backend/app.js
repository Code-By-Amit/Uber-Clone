require("dotenv/config");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const connectToDb = require("./db/db");
const userRoute = require('./routes/user.routes');
const captainRoute = require('./routes/captain.routes')
const mapRoute = require('./routes/maps.routes')
const app = express();

connectToDb();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors({  origin: 'http://localhost:5173', credentials:true}));
app.use("/users",userRoute);
app.use('/captains',captainRoute);
app.use('/maps',mapRoute);

app.get("/",(req,res)=>{
    console.log("Hello i am here")
    res.send('Hello World')
}) 

module.exports = app;
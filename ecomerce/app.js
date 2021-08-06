const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const expressValidator = require("express-validator");
const cors = require("cors")

//import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes  = require("./routes/product");

const app  = express();
const port = process.env.PORT || 8000

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

}).then(()=> console.log("DB connected"));

//

//Middlewares

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
//ROUTES

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);


//LISTENERS

app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})
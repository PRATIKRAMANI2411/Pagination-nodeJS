import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import route from "./routes/postRoute.js";

const app = express();
app.use(bodyParser.json());

const PORT = 5000;
const MONGOURL = "Your DB URL"

mongoose.connect(MONGOURL).then(()=>{

    console.log("DB connected successfully");

}).catch(error => console.log(error));


app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})


app.use("/api", route);
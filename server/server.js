const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");


const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
    console.log(mongoose.connection.readyState);
    //console.log(mongoose.)
})

Airbnb.find({"name": "Ocean View Waikiki Marina w/prkg"}, (error, data) => {
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})

app.listen(port, () => {
    // perform a database connection when server starts
    /*dbo.connectToServer(function (err) {
        if (err) console.error(err);

    });*/
    console.log(`Server is running on port: ${port}`);
});
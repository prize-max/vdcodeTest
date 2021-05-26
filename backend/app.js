const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;
const vdRoutes = require("./routes/vdcode");
const app = express();
require('dotenv/config');


 app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const uri = "mongodb+srv://vdcode:vdcode11223344@cluster0.ej8ej.mongodb.net/codetest?retryWrites=true&w=majority";

//console.log(process.env);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect().then(() => {
      console.log("Connected to database!");
  })
   .catch(() => {
     console.log("Connection failed!");
   });


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/object", vdRoutes);

module.exports = app;

// test

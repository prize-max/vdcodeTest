const { timeStamp } = require("console");
const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");
//require('dotenv/config');
mongoose.connect('mongodb+srv://vdcode:vdcode11223344@cluster0.ej8ej.mongodb.net/codetest?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


const vdcodeSchema = mongoose.Schema({
  key: { type: String, required: true },  
  value: { type: String, required: true },
//  timestamp: {type:Date, default:Date.now} 
//timestamp: {type:Number, default: new Date().getTime()}
timestamp: {type:Number, default: Date.now}


},{ timestamps: true });

//vdcodeSchema.plugin(uniqueValidator);

module.exports = mongoose.model("dummy", vdcodeSchema);


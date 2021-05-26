
const VdCode = require("../models/vdcode");

exports.createVdCode =async (req, res, next) => {
  console.log("It is hsu log " + req.body);
  var keys = Object.keys(req.body);
  var values = Object.values(req.body);
//for (var i = 0; i < keys.length; i++) {
 // console.log([keys[i]]);
//} 
console.log("It is Key " + keys[0]);
console.log("It is Value " + values[0]);
    const vdcode = new VdCode({
      key: keys[0],
      value: values[0]
    });
 await  vdcode
      .save()
      .then(result => {
        res.status(201).json({
          message: "Data created!",
          result: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          message: "Data creating failed!"
        });
      });
  
}

exports.getVdcode = (req, res, next) => {
    let fetchedVdCode;
    console.log("It is user request key: "+ req.params.key)
    console.log("It is user request query: "+ req.query.timestamp)
    if(Object.keys(req.query).length === 0)
    {
        console.log(" Length: "+Object.keys(req.query).length);
    VdCode.findOne({ key: req.params.key }).sort({ createdAt: -1 })
    .then(vdcode => {
        if (vdcode) {
          res.status(200).json(vdcode);
        } else {
          res.status(404).json({ message: "vdcode not found!" });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "Fetching post failed!"
        });
      });
    }
    else
    {
        VdCode.find({ key: req.params.key, timestamp: req.query.timestamp })
    .then(vdcode => {
        if (vdcode) {
          res.status(200).json(vdcode);
        } else {
          res.status(404).json({ message: "vdcode not found!" });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "Fetching post failed!"
        });
      });
    }
  }
  

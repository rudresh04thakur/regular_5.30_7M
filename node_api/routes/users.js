var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/node_client', { useNewUrlParser: true })
var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once('open', function () {
  console.log("Connection Done");
});

const Users = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: String,
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  var userModel = new mongoose.model('users', Users);
  userModel.find(function (err,data) {
    if (err) {
      res.json({"error ": err})
    } else {
      res.json(data)
    }
  });
});



router.post('/', function (req, res) {
  var userModel = new mongoose.model('users', Users);
  var user = new userModel(req.body);
  user.save(function (err) {
    if (err) {
      res.json({"error ": err})
    } else {
      res.json({"msg":"Data Saved"})
    }
  });
});


module.exports = router;

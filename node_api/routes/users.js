var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
const { patch, route } = require('.');

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
// user/123 or user?id=123 
router.delete('/:id',function(req,res,next){
  var userModel = new mongoose.model('users', Users);
  userModel.remove({_id:req.params.id},function (err) {
    if (err) {
      res.json({"error ": err})
    } else {
      res.json({"msg":"User Deleted"})
    }
  });
});

router.get('/:id',function(req,res,next){
  var userModel = new mongoose.model('users', Users);
  userModel.findOne({_id:req.params.id},function (err,data) {
    if (err) {
      res.json({"error ": err})
    } else {
      res.json(data)
    }
  });
});


router.put('/',function(req,res,next){
  var userModel = new mongoose.model('users',Users);
  var user = new userModel(req.body);
  user.update({_id:req.body.id},{$set: req.body},function(err,data){
    if (err) {
      res.json({"error ": err})
    } else {
      res.json(data)
    }
  });
});



module.exports = router;

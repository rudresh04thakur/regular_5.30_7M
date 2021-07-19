var express = require('express');
var router = express.Router();



router.get('/',function(req,res,next){
    console.log("Data -- ",req.body)
});

module.exports = router
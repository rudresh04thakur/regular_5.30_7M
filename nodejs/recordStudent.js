// var student_1 = require('./student')()
// var student_2 = require('./student')()

// var studentArray = []
// for(var i=0;i<5;i++){
//     studentArray.push(require('./student')());
//     studentArray[i].setName('Gopal_'+i);
//     studentArray[i].setRoll(i+1);
//     studentArray[i].setMark(45,65);
//     console.log(studentArray[i].getName(),studentArray[i].getRoll(),studentArray[i].getMark());
// }
// student_1.setName('Gopal');
// student_1.setRoll('21');
// student_1.setMark(45,65);
// console.log(student_1.getName(),student_1.getRoll(),student_1.getMark());

// student_2.setName('Mahesh');
// student_2.setRoll('23');
// student_2.setMark(65,65);
// console.log(student_2.getName(),student_2.getRoll(),student_2.getMark());

// function classes(){

// }
// classes.prototype.add = function(a,b){}
// classes.prototype.mul = function(a,b){}

// var c = new classes()
// c.add(3,4);
// c.mul(5,4);

var event = require('events');
var eventEmitter = new event.EventEmitter();
var nameGiven = function(){
    console.log("Name assigned");
} 
eventEmitter.on("nameGiven",nameGiven).emit('nameGiven');

var studentClass = require('./student');
var s = new studentClass();
s.on("name",function(){
    console.log("Name -- ",s.getName())
});
s.setName("Gopal");


// var name = "";
// var roll = 0;
// var m1 = 0;
// var m2 = 0;

// module.exports = function(){
//     return {
//         setMark:(a,b)=>{
//             m1=a;
//             m2=b;
//         },
//         getMark:function(){
//             return {"m1":m1,"m2":m2}
//         },
//         setName:function(n){
//             name = n
//         },
//         getName:function(){
//             return name;
//         },
//         setRoll:function(r){
//             roll = r
//         },
//         getRoll:function(){
//             return roll;
//         },
//     }
// }


var util = require('util');
var event = require('events');
var Class = function(){ };
util.inherits(Class,event.EventEmitter);
Class.prototype.name = ""
Class.prototype.roll = 0
Class.prototype.m1 = 0
Class.prototype.m2 = 0

Class.prototype.setName = function(n){
    name = n
    this.emit('name');
}
Class.prototype.getName = function(n){
    return name;
}

module.exports = Class;
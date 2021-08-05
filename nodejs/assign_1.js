/* 

+ - * / %

without if else / switch case

*/

var math = {
    '1': (a,b)=>{return a+b},
    '2': (a,b)=>{return a-b},
    '3': (a,b)=>{return a/b},
    '4': (a,b)=>{return a*b},
}

var i = parseInt(prompt("Enter 1st number"));
var j = parseInt(prompt("Enter 2nd number"));
var c = prompt("Enter your choice 1.Add 2.Sub 3.Mul 4.Div")
alert(math[c](i,j));
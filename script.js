var message = 'Hello world'

console.log(message)
//////////////////////////////////////////////////////////
var insane 
console.log(insane) // undefined
insane = 'hello'
console.log(insane) // hello 

var num = 11; // обьевленная переменная показывается вне function  

function getNum () {
    var num = 7;
    console.log(num)
    
};
getNum();
console.log(num) 

let num = 10 
console.log(num)
let num = 22
console.log(num) // error так как let нельзя обьявлять в одной локации с одним именем 


var num = 10 
console.log(num)
var num = 22
console.log(num)  // good так как var можно обьявлять с одним именем в одной локацыи

const cool = 10 
console.log(cool)
const cool = 12
console.log(cool) // ошибка так как cont  не льзя менять вообще  

// Higher Order Function

// function abcd(val){

// }
// abcd(function(){})


// function abcd(){
//     return function(){}
// }
// abcd()


// var arr = [1,2,3,4,5];

// arr.forEach(function(){})

// Constructor Function

// function saanchaOfBiscuit(){
//     this.width = 12;
//     this.height = 22;
//     this.color = "brown";
//     this.taste = "sugary";
// }

// var bis1 = new saanchaOfBiscuit();
// var bis2 = new saanchaOfBiscuit();
// var bis3 = new saanchaOfBiscuit();


// function circularButtonBanao(color){
//     this.radius = 2;
//     this.color =color;
//     this.icon = false;
//     this.pressable = true;
// }

// var redbtn = new circularButtonBanao("red");
// var greenbtn = new circularButtonBanao("green");

// function abcd(){
//     this.name = "harsha";  // constructor fnc
// }
// var person1 = new abcd();

// First Class Function

// var abcd = function(){

// }

// setTimeout(function(){})

// New Keyword

// function abcd(){
//     this.age = 12;
// }
// new abcd();

// IIFE(Immediately Invoked Function Expression)

// (function(){
//     var a = 12; // private variable
// })()

// var ans = (function(){
//     var privateval = 12;

//     return {
//         getter:function(){
//             console.log(privateval);
//         },
//         setter:function(val){
//             privateval = val;
//         }
//     }
// })()

// Prototypal Inheritance

// var Human = {
//     name: "Harsha",
//     canFly: false,
//     canTalk: true,
//     willDie: true
// }

// var student = {
//     solveJsQuestions: true,
//     createModernWebsite: true
// }

// student.__proto__ = Human;

// this keyword

//global scope
// var a = 12; 

// console.log(this);  // gives window

//function scope
// function abcd(){
//     console.log(this);  // gives window
// }
// abcd()

//method scope
// var obj = {
//     name: "harsha",
//     baatKaro:function(){
//         console.log(this); // gives object
//     }
// }
// obj.baatKaro();

//Event Listeners

// var button = document.querySelector("button");
// button.addEventListener("click", function(){
//     this.style.color = "red";
// })

// call apply bind
//1. call
// function abcd(){
//     console.log(this);
// }

// var obj = {age: 24}

// abcd.call(obj)


// function abcd(val1, val2, val3){
//     console.log(this,val1,val2,val3);
// }

// var obj = {age: 24}

// abcd.call(obj,1,2,3)

//2. apply

// function abcd(val1, val2, val3){
//     console.log(this,val1,val2,val3);
// }

// var obj = {age: 24}

// abcd.apply(obj, [1,2,3])

// bind

function abcd(){
    console.log(this);
}

var obj = {age: 24}

 var bindedfnc = abcd.bind(obj)
 bindedfnc();
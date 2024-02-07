// var let const

// var function scoped
// function abcd(){
//     for(var i = 1; i < 12; i++){
//         console.log(i);
//     }
//     console.log(i); //we use i
//  }
//  abcd();

// let const braces scoped
// function abcd(){
//     for(let i = 1; i < 12; i++){
//         console.log(i);
//     }
//     console.log(i); //error
//  }
//  abcd();

//var adds itself to the window object.
// var a = 12;

// let const doesn't adds to the window object.
// let b = 12;

//Execution context
// function abcd(){
//     var a = 12;
//     function def(){
//         var b = 12;
//     }
// }
// abcd();

// How to copy reference values
// var a = [1,2,3,4,5];
// var b = [...a]; 
// b.pop();

// var obj = {name: "harsha"};
// var copyobj = {...obj};

// Truthy vs Falsy
// Falsy values -> 0 false undefined null NaN document.all
//Others are truthy values

// if(7){
//     console.log("hey");
// }
// else{
//     console.log("hello");
// }

//forEach loop
// var a = [1,2,23,34,34,4,23,4,3,45,54,3,23];

// a.forEach(function(val){
//     console.log(val+2);
// })

// var a = [1,2,3,4,5];
// a.forEach(function(val){
//     console.log(val+2);
// })
// console.log(a);

//forin loop
// var obj = {
//     name: "harsha",
//     age: 24,
//     city: "pune"
// }

// for(var key in obj){
//     console.log(key);
// }

// for(var key in obj){
//     console.log(obj[key]);
// }

// for(var key in obj){
//     console.log(key,obj[key]);
// }

//do-while loop
// var a = 120;

// do{
//     console.log("hey");
//     a++;
// }
// while(a<15)

//callback function
// setTimeout(function(){
// console.log("2 second baad chala");
// }, 2000);

//first class function

// function abcd(a){
//     a();
// }
// abcd(function(){console.log("hey")})

//How arrays are made behind the scenes
// var arr = [221,452,3,2344];

// arr = {
//     0: 221,
//     1: 452,
//     2: 3,
//     3: 2344
// }

// arr[-1] = 2;

//How to delete object props
var a = {
    name: "harsha",
    age: 25
}
delete a.age;
delete a.name;
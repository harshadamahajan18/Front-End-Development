// 1.var const let
// let is also a variable
// var dulha = "Lab";
// var dulhan = "Laby";
// const dulha = "Lab";
// const dulhan = "Laby";

//2.hoisting
// console.log(a); //undefined
// var a = 12;

// 3.Types in js
// reference -> () [] {} and other are primitive
// var a = [1,2,3,4];
// var b = a;
// b.pop();

// 4.Conditionals -> if else else-if
// if(11>12){
    
// }
// else if(12>13){

// }
// else if(14>16){

// }
// else {

// }

//5.Loops-> for while
// loop ka matlab hai repeat
// for(var i = 0; i < 11; i++){
//     console.log(i);
// }

// while(){

// }


//6.Functions 
// function abcd(){
//     console.log("hello");
// }
// abcd();

// function makeTea(){
//     console.log("Take container");
//     console.log("Add milk,suger and tea and boiled it");
//     console.log("serve tea");
// }
// makeTea();
// makeTea();
// makeTea();

// function abcd(a,b,c){ // parameters
//     console.log(a);
// }
// abcd(12,15,25); // arguments(real values)

//7.Arrays
    // var arr = [1,2,3,4,5];
    // arr[0] = 1;

// push (insert at last)
var arr = [1,2,3,4,5];
arr.push(8);
// pop (delete from last)
var arr = [1,2,3,4,5];
arr.pop();
// shift (remove from beginning)
var arr = [1,2,3,4,5];
arr.shift();
// unshift(insert at beginning)
var arr = [1,2,3,4,5];
arr.unshift(0);
// splice (delete element from position)
var arr = [1,2,3,4,5];
arr.splice(2,2);

//8.Objects
var ghadi = {
    brand: "sonata",
    price: "15k",
    type: "automatic",
    digital: false
}
// accessing values
ghadi.type

//updating object props
ghadi.brand = "titan";
## Difference b/w var let const

1.1) var old js mein tha

1.2) var function scoped hota hai -> var apne parent function mein kahi bhi use ho sakta hai.
eg:- 
```javascript
     function abcd(){
        for(var i = 1; i < 12; i++){
            console.log(i);
        }
        console.log(i); //we use i
     }
     abcd();
    o/p:- 1 2 3 4 5 6 7 8 9 10 11 12
```
1.3) var adds itself to the window object.

2.1)let const new js mein hai

2.2)let const braces scoped hota hai
eg:- 
```javascript
     function abcd(){
        for(let i = 1; i < 12; i++){
            console.log(i);
        }
        console.log(i); //error
     }
     abcd();
     o/p:- 1 2 3 4 5 6 7 8 9 10 11 error
```
2.3)let const doesn't adds to the window object.

JS language mein kuch cheeje nahi hai jo hum use kar sakte hai aur wo cheeje hume js se nahi balki browser se milti hai, aise saare feature jo JS ka part nahi hai but phir bhi use kar sakte hai unhe hum dhoond sakte hai ek particular object mein jiska naam hai window.
eg:- alert, prompt, console are window object.

## Browser Context API
Three main part of Browser Context API

(1.Window      2.Stack         3.Heap)

Jitne bhi variables ya data hum banate hai unhe store kahi to karna padta hai uske liye hota hai heap memory.(Intermediate data stored on heap memory)

## Execution Context
Execution context matlab jab bhi hum function chalaayenge function apna khudka ek imaginary container bana lega jismein uski 3 cheeje hogi:
1.variables

2.functions inside that parent function

3.lexical environment of that function

Yeh jo container hai imaginary ise hi hum execution context kahte hai.

Execution context is a container where the function's code is executed and it is created 
whenever a function is called,it contains 3 things, variable, functions and lexical environment.

## Lexical Environment
Lexical environment hota hai ek chart jisme ye likha hota hai ke aapka particular function kin cheejo ko access kar sakta hai and kinko nahi, matlab ki it holds it's scope and scope chain.

How to copy reference values
```javascript
var a = [1,2,3,,4,5];
var b = [...a]; // ...(spread operator)
b.pop();

var obj = {name: "harsha"};
var copyobj = {...obj};
copyobj.name = "harshita";
copyobj;
```
## Truthy vs Falsy
1.Falsy values -> 0 false undefined null NaN document.all

2.Others are truthy values.

## forEach loop
1.forEach loop sirf array pe chalta hai matlab ki jab bhi tumhare pass ek array ho,tab use mein forEach loop aata hai.
eg:-
```javascript
var a = [1,2,23,34,34,4,23,4,3,45,54,3,23];
a.forEach(function(val){
    console.log(val+2);
})
```
2.forEach kabhi bhi by default aapke array mein change nahi karta wo aapko changes karke deta hai array ki temporary copy par jiske wajah se array humesha same rehta hai.
eg:-
```javascript
var a = [1,2,3,4,5];
a.forEach(function(val){
    console.log(val+2);
})
console.log(a);
```
## forin loop

1.Objects par loop karne ke liye hota hai forin loop.
eg:-
```javascript
var obj = {
    name: "harsha",
    age: 24,
    city: "pune"
}

for(var key in obj){
    console.log(key);
}

for(var key in obj){
    console.log(obj[key]);
}

for(var key in obj){
    console.log(key,obj[key]);
}
```
## do-while loop
```javascript
var a = 120;

do{
    console.log("hey");
    a++;
}
while(a<15)
o/p:- hey
```

## Callback Functions
1.Jab bhi koi aisa code jo baad me chalta hai aap likhoge, kyunki wo code baad me chalta hai js ko ye pata nahi hota ke wo complete hua ya nahi, aise code ke completion par js ko bataya jaata hai ke wo complete ho gaya aur aap usse chala sakte ho, ye bataane ka kaam callback ka hai.
eg:-
```javascript
setTimeout(function(){
console.log("2 second baad chala");
}, 2000);
```
2.Aisa code jo baad e chalta hai usse hum ek function de dete hai ke bhaiya jab complete ho jaana to ye function chala dena, aur wo function jo hum dete hai wo ek normal function hi hota hai aur usse kahte hai callback function.

## First Class Function
JS mein ek concept hai jiska matlab hota hai ki aapfunction ko use kar sakte ho as a value.
eg:-
```javascript
    function abcd(a){
    a();
    }
    abcd(function(){console.log("hey")})
    o/p:- hey
```
How arrays are made behind the scenes
```javascript
var arr = [221,452,3,2344];

arr = {
    0: 221,
    1: 452,
    2: 3,
    3: 2344
}
arr[-1] = 2;

o/p:- [221,452,3,2344, -1:2]

1.typeof{} -> 'object'
2.typeof[] -> 'object'
3.Array.isArray([]) -> true
4.Array.isArray({}) -> false
```
How to delete object props
```javascript
var a = {
    name: "harsha",
    age: 25
}
delete a.age;
delete a.name;
o/p:- {}
```
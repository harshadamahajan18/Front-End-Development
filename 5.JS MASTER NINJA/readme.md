# Higher Order Function

Higher order functions are the functions which accept a function in a parameter OR return a function OR both.

Aisa function jo accept karle ek aur function ya fir wo return karde ek aur function.

eg:-forEach method always takes another function inside it,so forEach is a higher order function.

```javascript
function abcd(val){

}
abcd(function(){})

       OR

function abcd(){
    return function(){}
}
abcd()

       OR

var arr = [1,2,3,4,5];

arr.forEach(function(){})
```
# Constructor Function

Normal function jismein this ka istemaal ho and aap function ko call karte waqt new keyword ka use karein.

Jab aapke paas aisa koi bhi mauka ho ke aapko ek jaisi properties waale bahut saare elements banane hai us waqt aap constructor function use kar sakte ho.

```javascript
function saanchaOfBiscuit(){
    this.width = 12;
    this.height = 22;
    this.color = "brown";
    this.taste = "sugary";
}

var bis1 = new saanchaOfBiscuit();
var bis2 = new saanchaOfBiscuit();
var bis3 = new saanchaOfBiscuit();

function circularButtonBanao(color){
    this.radius = 2;
    this.color =color;
    this.icon = false;
    this.pressable = true;
}

var redbtn = new circularButtonBanao("red");
var greenbtn = new circularButtonBanao("green");
```

A function which whenever invoked with "New" keyword,returns an object.If we use "this" keyword inside that function,it returns an object with all the properties and methods mentioned inside that funvtion with 'this' keyword such function is called as constuctor function.

```javascript
function abcd(){
    this.name = "harsha";  // constructor fnc
}
var person1 = new abcd(); //new keyword infront  of fnc call makes a new blank object & returns to the person1 variable.
```

# First Class Function

A language is said to have first class functions when the functions in that language are treated as normal values or like variables,you can save them,you can pass them as arguments to another functions.

eg:-
```javascript
setTimeout(function(){})
```

# New Keyword

Jab bhi new lagta hai humesha ek blank object bana lo.

```javascript
function abcd(){
    this.age = 12;
}
new abcd();

 o/p:-{
        age: 12
      }
```

# IIFE(Intermediately Invoked Function Expression)

IIFE hai function ko turant chalane ki kala,is tareeke se ki hum log koi private variable bana paaye.

The variable in IIFE can not access outside IIFE because it is private.If we want to access private
variable we have to use getter and setter methods.

eg:-
```javascript
(function(){
    var a = 12; // private variable
})()
// This is IIFE
```
```javascript
var ans = (function(){
    var privateval = 12;  //can not access this

    return {
        getter:function(){   //get value
            console.log(privateval);
        },
        setter:function(val){   //set value
            privateval = val;
        }
    }
})()
```

# Prototype

JS by default adds a property called [[prototype]]
to every object, so if you ever see any object, you can blindly say that object contains prototype.

1. Where [[prototype]] came from?

Js by default adds a property called [[prototype]] to every object, so if you ever see any object, you can blindly say that object contains prototype.

2. What does [[prototype]] contains?

[[prototype]] contains many helper properties and methods which we can use to complete our task,let's say we create an array and we want to know length of it, what do we do, we use .length property on array, did we created .length on that array, no! but it still contains .length, the is how?

The answer is, many properties and methods are already available to use built by javascript creators inside prototype of every object.

# Prototypal Inheritance

Inheritance is basically passing parent's features or properties to their children's, to do the same thing in JS with the help of prototype(one extra property always given by JS to every object) is called prototypal inheritance.

1. How we perform prototypal inheritance?

Make an object called human and put properties like canFly, canTalk, willDie

```javascript
var Human = {
    name: "Harsha",
    canFly: false,
    canTalk: true,
    willDie: true
}
```
Make another object called student, he can do all things which a human can do but he can do more things like, he can solve js questions and create modern websites, so we create extra two props which normal humans can't do in that object and rest properties we will inherit from human.

```javascript
var student = {
    solveJsQuestions: true,
    createModernWebsite: true
}

student.__proto__ = Human; //This line does the MAGIC
```

# 'this' Keyword

this keyword is a special keyword in JS which changes it's value in different context.

1. 'this' in global scope
Jab bhi koi cheej {} brackets ke andar nahi hoti to hum usse global scope kahte hai.
eg:-
```javascript
var a = 12; //global scope

console.log(this);  // gives window
```
2. 'this' in function scope
```javascript
function abcd(){
    console.log(this);  // gives window
}
abcd()
```
3. 'this' in method scope
Ek function jo object ke andar ho, usse method kahte hai.
```javascript
var obj = {
    name: "harsha",
    baatKaro:function(){
        console.log(this); // gives object
    }
}
obj.baatKaro();
```
IMP:-
        global => Window
        function => Window
        method => object

VIMP:-
In any method,'this' keyword always refers to parent object.

4. Event Listeners
```javascript
var button = document.querySelector("button");

button.addEventListener("click", function(){

    console.log(this); //this keyword is equal to whatever written before addEventListener,in this case button
})
```

# call apply bind
Agar tumhaare paas koi function hai and koi object hai and tumhe function chalana hai aur by default jo this ki value window hai usse window na rakh kar point karwana hai kisi object ki taraf.

1. call
```javascript
function abcd(){
    console.log(this);
}

var obj = {age: 24}

abcd.call(obj)

    OR

function abcd(val1, val2, val3){
    console.log(this,val1,val2,val3);
}

var obj = {age: 24}

abcd.call(obj,1,2,3)
```
2. apply
```javascript
function abcd(val1, val2, val3){
    console.log(this,val1,val2,val3);
}

var obj = {age: 24}

abcd.apply(obj, [1,2,3])
```
3. bind
```javascript
function abcd(){
    console.log(this);
}

var obj = {age: 24}

var bindedfnc = abcd.bind(obj)
bindedfnc();
```

# Pure Function
Pure function is any function which has these 2 features:
1. It should always return same output for same input.
2. It will never change/update the value of a global variable.
eg:-
```javascript
function calc(val){
    return val+2; //always same answer if you pass same value for 'val' argument, hence this function is pure function.
}

```
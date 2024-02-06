## word vs keyword

 word -> Anything which has no meaning in language is word.

eg:-
```javascript
     harsha
     is 
     good 
     girl
```
keyword -> Anything which has meaning in language is keyword.
eg:-
```javascript
     for
     if
     else
     var
```
## variable and constant

Variable:- 

1.code mein koi bhi data store karne ke liye jiska use hota hai usse kehte hai variable.

2.The value of variables can be changed.

constant ->

1.The value of constants can not changed once it is declared.

## Hoisting 
1.variable and functions are hoisted which means there declaration is moved on the top of the code.
eg:-
```javascript
console.log(a);
var a = 12;
```
2.If we have not given any value to variable then by default the value of variable is undefined because of hoisting.

## undefined and not-defined
1.undefined -> existance hai par value pata nahi hai woh hai undefined.
eg:-
```javascript
console.log(b);
var b = 24;
```
2.not-defined -> Jiska existance hi nahi hai.
eg:-
console.log(b); 

## Types in JS(primitive and reference)
primitive -> number, string ,null, undefined, boolean

reference -> [] () {}

Aisi koi bhi value jisko copy karne par real copy nahi hota, balki us main value ka reference pass ho jaata hai, usse hum reference value kahte hai, aur jiska copy karne par real copy ho jaaye wo value primitive type value hoti hai.

## Conditionals(if else else-if)
1.jab bhi baat agar magar par aayegi,yaa phir baat ayegi aisa hua to ye karo waisa hua to woh karo.
```javascript
    if(true/false)
```
## Loops(for while)
Loop ka matlab hai repeat

for(start; end; change){}
while(){}

## Functions

Functions -> code ko naam dena

Functions mainly 3 kaam ke liye hote hai:-

1.Jab aapka code aap turant nahi chalana chaahte future mein chalana chaahte ho.
eg:-
```javascript
function abcd(){
    console.log("hello");
}
abcd();
```
2.Jab aapka code aap reuse karna chahate ho.
eg:-
```javascript
function makeTea(){
    console.log("Take container");
    console.log("Add milk,suger and tea and boiled it");
    console.log("serve tea");
}
makeTea();
makeTea();
makeTea();
makeTea();
```
3.Jab aap code chalana chahate ho har bar with different data.
eg:-
```javascript
function abcd(a,b,c){ // parameters
    console.log(a);
}
abcd(12,15,25); // arguments(real values)
```

Arguments->real value jo hum dete hai funvtion chalaate waqt.
Parameter->variables jinme value store hoti hai arguments wali.

## Arrays(group of values)
Hum ek variable mein ek value store kar paate hai par jab humein ek se jyaada value store karni ho tab phir use hota hai array ka,matlab ki array aapko freedom deta hai ek se jyada value use karne ka.
```javascript
    var arr = [1,2,3,4,5];
    arr[0] = 1;
```
Array methods:- 
1. push (insert at last)
2. pop (delete from last)
3. shift (remove from beginning)
4. unshift(insert at beginning)
5. splice (delete element from position)

## Objects
 Ek se jyada bande ki baat ki to hua array, ek bande ke baare mein saari baat ki to hua object.

 Object hai ek bande ki details ko hold karna,in a key-value pair.

1. Blank object
```javascript
var a = {};
```
2. Filled object
```javascript
var a = {
    age: 25,
    name: "harsha",
    linkedIn: "Harsha",
    contact: 86874454599
}
//accessing values
a.age;
a.name;

//updating object props
a.name = "mahajan";

//properties vs methods
var ghadi = {
    brand: "sonata",
    price: "15k",
    type: "automatic",
    digital: false,
    kuchhbolo: function(){

    }
}
```
properties/props -> eg:- brand, price,type are props

Methods -> Object ki property jiska type function ho wo methods kehlata hai.
eg:- kuchhbolo is method
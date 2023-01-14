"use strict";


let user = "Mark", // string
age = 50, // integer
message = "Hello"; // string

const birthday = "xx.xx.xxxx";
let digit = 20, 
fract = 20.12345,
exp = 2e10, // 10**2
expFract = 1.24e-3,
fract1 = .25,
fract2 = 25.; //  25.0

const bigInt = 123456714691324682364286428346287346283n; // 2**53
let bin = 0b1001;

let str = "Hello world";


// alert (`Hello, ${user}!`); // Hello, Mark;
// alert ('Hello, ${user}!'); // Hello, ${user}!

let userStatus = true; // 1
let age1 = null; 
let age2 = undefined;
let age3 = NaN;
let age4 = Infinity;
let age5 = -Infinity;

let number; // undefined 

typeof 0; // "number"
let userName = "Mark";
typeof userName; // "string"
typeof user // "object"
typeof Symbol("id");


alert, prompt, confirm
let age = prompt("How old're U?", 18);
alert(`U're ${age} years old`);

let isUser = confirm("Are U?");
alert(isUser);


let value = true; 
typeof value; // boolean
value = String(value); // "true"
typeof value; // string

alert("3"/"2"); // 1.5
let str = "123";
let num = Number(str); // 123
let num = Boolean(str); // true
alert(Boolean("Hrrlewrw")); // true
alert(Boolean("0")); // true

=, +, -, *, /, **, %, 

alert("My"+"string"); // Mystring
alert(typeof(2+2+"1")); // 41

alert(2-2-"1"); // -1

let x = -1;
alert(+x); // -1

let y = "123";

alert(+true); // 1 
alert(+""); // 0 
alert (y+100); // 123100

let a, b, c; // undefined 
a = b = c = 2; 


// a += b; // a = a + b; 
++ -- 
++a, a++

for (let i = 0; i<10; ++i){
}

& | ^ ~ << >> >>>
let year = 1925;
if (year == 2015) alert("U're right");

if (year == 2015) {
	alert;
	alert;
} else {

}

(year>100) ? (year = 100) : (year = 2015);

if (year < 10 || year > 0);
if (year < 10 && year > 0);
let newYear = !year;
let user = "Mark"; // undefined;
alert (user ?? "Anonymous");

while (condition) {

}

while (i) alert(i--);

do {

} while (); 

for (let i = 0; i<3; i++){

}

switch () {

	case 1:
	case 2:  if (x == value);
	default: alert ("None");
// }

let words = ["one", "two", "three"];

// for (let word of words) {
// 	console.log(word);
// }

for (let i in words) {
	console.log(i);
}

function showMessage() {
	alert("Hello world");
}
showMessage();

function sum (a,b){
	return a+b;
}

let result = sum(1,2);
alert (result);

function showSimple(n) {
	nextSimple: for (let i = 2; i<n; i++) {
		for (let j = 2; j<i; j++) {
			if (i % j == 0) continue nextSimple;
		}
		console.log(i);
	}
}
showSimple (20);

let countSimple = showSimple() {

}


function ask (question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

ask (
	"Are U agree?",
	function() {alert("You agreed");},
	function() {alert("You declined");}
);

function sum (a,b) {
	return a+b;
}

let sum = function(a,b) {
	return a+b;
};

console.log(sum(1,2));

alert ("Hello world");
// let array_1 = ["123","123","123"];
// array_1.push("321");
// array_1.unshift("321");
// console.log(array_1[0]);

// let fib = [];
// for (let i = 0; i < 10; i++) {
// 	fib.push(fib[i+1] + fib [i]);
// }

// console.log(fib);

// let words = ["one", "two", "three"];
// // for (let word of words) {
// // 	console.log(word);
// // }

// // for (let i in words) {
// // 	console.log(i);
// // }


// let user = {
// 	name: "Mark",
// 	age: 30,
// 	email: "gfdklgjdlfj@gmail.com"
// };

// // alert (user.name); // Mark
// // delete user.name;

// // function newUser (name, age) {
// // 	return {
// // 		name: name, 
// // 		age: age
// // 	};
// // }


// // let user = newUser ("Mark", true);

// alert ();


// let user = {
// 	name = "Mark",
// 	age = 25; 
// };

// for (let name in names) {
// 	alert (name);
// }


// delete user.size.height
// alert (user.size.height);


// let admin = user; 
// admin.name = "Oleg";

// alert(user.name);


// let admin = {};

// // for (let key in user) {
// // 	admin[key] = user [key];
// // }

// Object.assign (admin,user);
// alert (admin.name);
// // admin.name = "Oleg";
// alert (user.name == admin.name);


// function Hello () {
// 	alert("Hello world");
// }


// user.Hello = "";
// user.Hello();


// let user = {
// 	name: "Mark",
// 	age: 30,
// 	email: "gfdklgjdlfj@gmail.com",
// 	size: {
// 		height: 190,
// 		weight: 75
// 	}

// };



// let Hello = () => alert(this.name);
// Hello(); 

// function makeUser () {
// 	return {
// 		name: "Mark",
// 		ref: this
// 	}
// };

// let user = makeUser;
// alert(user.ref.name);

// function eser(name) {
// 	this.name = name;
// }

// let user = new eser("Mark");
// alert(user.name);

// let id = Symbol("23");

// let user = {
// 	[id]: 1,
// 	name: "Mark",
// 	age: 30,
// 	email: "gfdklgjdlfj@gmail.com",
// 	size: {
// 		height: 190,
// 		weight: 75
// 	}
// }

// alert (user[id]);

// -------------------------------------------------

// let user = {
// 	name: "Mark",
// 	age: 24, 
// 	mail: "dfgl@mail.ru",
// 	"online": true
// };

// alert(user.name);
// delete user.age;

// user.mail = "wtuio@mail.com";

// let admin = {};
// admin["online"] = false; 
// alert (admin["online"]);


// let key = prompt("What do you want?", "name");
// alert(user[key]);

// let fruit = prompt("What's fruit?", "fruit name");

// let bag = {
// 	[fruit] : 5,
// };

// alert(bag.fruit);

// function makeUser (name, age) {
// 	return {
// 		name: name, 
// 		age: age
// 	};
// }

// let user = makeUser("Mark", 30);
// alert(user.name);



// let obj = {
// 	for: 1, 
// 	let: 2, 
// 	return:3 
// };

// alert(obj.for + obj.let + obj.return);


// let user = {
// 	name: "Mark",
// 	age: 24, 
// 	mail: "dfgl@mail.ru",
// 	"online": true
// };

// for (let key in user) {
// 	alert(user[key]);
// }


// let phoneCodes = {
// 	"+1" : "USA",
// 	"+7" : "Russia"
// };

// for (let phoneCode in phoneCodes) {
// 	alert(phoneCode);
// }

// let user = {
// 	name: "Mark",
// 	age: 24, 
// 	mail: "dfgl@mail.ru",
// 	"online": true, 
// 	sizes: {
// 		height: "190",
// 		weight: "75"
// 	},
// 	sayHello() {
// 		let arrow = () => alert(this.name);
// 		arrow();
// 	}
	
// };

// user.sayHello();



// let admin = {};

// // for (let key in user) {
// // 	admin[key] = user[key];
// // }


// Object.assign(admin, user);
// admin.name = "Oleg";
// alert(user.sizes.height);

// admin.name = "Peter";
// alert(user.name);


// function sayHello() {
// 	alert(this.name);
// }

// user.f = sayHello;
// admin.f = sayHello;

// user.f();
// admin.f();



// function User(name) {
// 	this.name = name;
// 	this.sayHello = function() {
// 		alert("My name is "+ this.name);
// 	};
// }


// let user = new User("Mark");
// user.sayHello();

// let obj = {};

// function A() {return obj;}
// function B() {return obj;}

// let a = new A;
// let b = new B;

// alert (a==b) // true ...

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// let id = Symbol("id");
// let user = {
// 	[id]: 123,
// 	name: "Vasya"
// };

// let clone = Object.assign({}, user);
// alert(clone[id]);

// for (let key in user) alert(key);
 
// user[id] = 1;
// alert(user[id]);


// user[id] = 2;
// alert(user[id]);

// # Task 1
// // let user = {};
// // user.name = "Mark";
// // user.name = "Oleg";
// // delete user.name;

// # Task 2 

// function isEmpty (obj) {
// 	for (let key in obj){
// 		return true;
// 	}
// 	return false; 
// }
// let schedule = {};
// alert(isEmpty(schedule));
// schedule["9.00"] = "work";
// alert(isEmpty(schedule));

// # Task 3

// const user = {
// 	const: "John"
// };

// user.name = "Pete";
// user.surname = "Ret";
// console.log((user.surname));

// user = 123;

// # Task 4

let summary = {
	Oleg: 100, 
	Petr: 200, 
	Alex: 300
};

let sum = 0; 
for (let qwerty in summary){
sum += summary[qwerty];
}

console.log(sum);
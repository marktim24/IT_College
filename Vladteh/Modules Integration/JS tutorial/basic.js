// #Variables
/* 
let age = 24,
	isStudent = true,
	firstName = 'Mark'

const x = null,
	y = undefined,
	z = Infinity // -Infinity		 1/0

console.log(firstName, age) 
*/

// #Array & object
/* 
const person = {
	firstName: 'Mark',
	age: 24,
	hobbies: ['football', 'tennis'],
	getName() {
		return this.firstName
	},
}
console.log(person.getName())
const people = [person, 'John', 'Jane'] 
*/

// #Function & arrow function
/* 
function getName(name) {
	return(name)
}
const getName = name => {
	return name
}
console.log(getName('John'))

const sum = (number1, number2) => number1 + number2
console.log(sum(20,20)) 
*/

// #Condition

/* 
function getCarName(price) {
	if (price >= 1_000_000) {
		return 'BMW'
	}

	if (price > 500_000) {
		return 'Audi'
	}

	if (price > 100_000) {
		return 'VAZ'
	}

const getCarName = price =>
	price >= 1_000_000
		? 'BMW'
		: price > 500_000
		? 'Audi'
		: price > 100_000
		? 'Audi'
		: ''

const getCarName = (price = 100_000) => {
	switch (price) {
		case 1_000_000:
			console.log('BMW')
			break
		case 500_000:
			return 'Audi'
		case 100_000:
			return 'VAZ'
		default:
			return `Sorry, ${price} doesn't fit`
	}
}


console.log(getCarName()) 
*/

// #DOM

/*
document.body.style.backgroundColor = '#1D1E22'
const heading = document.querySelector('h1')

heading.style.fontSize = '50px'
heading.style.fontFamily = 'Montserrat, sans-serif'
heading.style.color = 'white'
heading.append('JS') 
*/

// #Array methods

/* const cities = ['London', 'Moscow', 'New York', 'Helsinki', 'Tallinn']
const students = [
	{
		name: 'John',
		age: 21,
		city: 'Helsinki',
	},
	{
		name: 'Jane',
		age: 18,
		city: 'London',
	},
	{
		name: 'Alex',
		age: 32,
		city: 'Moscow',
	},
]  */

/* for (let i = 0; i < cities.length; i++) {
	console.log(cities[i])
} */

// map || foreach
/* cities.forEach(city => console.log(city + ' 1'))
console.log(cities.map(city => city + ' 1')) */

// filter
/* console.log(students.filter(student => student.age >= 21)) */

// push & unshift
/* cities.push('Berlin')
console.log(cities)

cities.unshift('Berlin')
console.log(cities) */

// slice

/* console.log(cities.slice(0,3)) */

// find
/* console.log(students.find(student => student.name === 'Alex')) */

//reduce

/* const cart = [
	{
		id: 1,
		name: 'Coffee',
		price: 40,
	},
	{
		id: 2,
		name: 'Apple juice',
		price: 60,
	},
	{
		id: 3,
		name: 'Milk',
		price: 100,
	},
]

console.log(cart.reduce((acc, product) => acc + product.price, 0))
 */

// Assign
/* const person = {
	name: 'Mark',
	age: 24,
	city: 'New York',
}

const dividend = {
	profit: 100,
}
 */
/* console.log(Object.assign(person, dividend))
 */

//Entries
/* console.log(Object.entries(person))
 */
//Keys and Values
/* console.log(Object.keys(person))
console.log(Object.values(person))
 */

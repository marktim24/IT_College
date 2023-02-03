document.querySelector('body').style.backgroundColor = '#282A36'

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	.then(response => response.json())
// 	.then(json => console.log(json))
// 	.catch(e => console.error(e))

const fetchToDo = async () => {
	try {
		const repsonse = await fetch('https://jsonplaceholder.typicode.com/todos/1')
		const json = await repsonse.json()
		console.log(json)
	} catch (e) {
		console.error(e)
	}
}

fetchToDo()

const array = [1, 4, 5, 7, ,756, 5, 7, -123];

function linearSearch (array, item) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === item)
		return 1; 
	}
	return null;
}

console.log(linearSearch(array, 4))
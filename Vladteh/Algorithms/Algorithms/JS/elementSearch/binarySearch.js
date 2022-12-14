const array = [1, 2, 3, 4, 5, 6, 7, 8];

function binarySearch (array, item) {
	let start = 0; 
	let end = array.length
	let found = false; 
	let middle; 
	let position = -1;
	while (found === false && start <= end) {
		middle = Math.floor((start + end) / 2);
		if (array[middle] === item) {
			found = true; 
			position = middle; 
			return position;
		}
		if (item < array[middle]) {
			end = middle - 1; 
		} else {
			start = middle + 1;
		}
	}
	return position;
}

console.log(binarySearch(array, 0));
const array = [1, 4, 5, 7, 756, 5, 7, -123];


function quickSort (array) {
	if (array.length <= 1) {
		return array
	} // 
	let middleIndex = Math.floor(array.length / 2);
	let middle = array[middleIndex];
	let less = [];
	let bigger = [];
	for (let i = 0; i < array.length; i++) {
		if (i === middleIndex)
			continue
		if (array[i] < middle) {
			less.push(array[i]);
		} else {
			bigger.push(array[i]);
		}
	}
	return [...quickSort(less), middle, ...quickSort(bigger)]
}

console.log(quickSort(array));

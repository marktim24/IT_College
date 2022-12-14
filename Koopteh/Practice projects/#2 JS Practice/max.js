const array = [1,2,3,4,5,6,7,8,9,0,-14324,2343];

function findMax (array) {
	let max = array[0];
	for (let num of array) {
		if (max < num) {
			max = num;
		}
	}
	return max;
}

console.log(findMax(array));

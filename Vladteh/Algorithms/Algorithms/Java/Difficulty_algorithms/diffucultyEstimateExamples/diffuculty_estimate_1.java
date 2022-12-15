public class Example1 {


	//n - array length 
	// time: O(n), memory: O(1)
	public reverse(int[] array) {
		for (int i = 0; i < array.length/2; i++){
			swap(array, i, array.length-i-1);
		}
	} 

	// time: O(1), memory: O(1)
	public void swap (int[] array, int i, int j) {
		int tmp = array[i];
		array[i] = array[j];
		array[j] = tmp; 
	}

}
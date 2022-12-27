public class diffuculty_estimate_2 {

// time: O(n^2), memory: O(1)
	public void sort(int[] array) {
		for (int i = 1; i < array.length; i++) { // O(n)
			for (int j = i; j > 0; j--) { // O(n)
				if (array[j] > array[j-1]) { // O(1)
					swap(array, j, j-1); // O(1)
				} else break;
			}
		}
	}

	// time: O(1), memory: O(1)
	public void swap (int[] array, int i, int j) {
		int tmp = array[i];
		array[i] = array[j];
		array[j] = tmp; 
	}

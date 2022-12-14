public class quickSort {


	public static void quickSort(int[] array, int low, int high) {

		if (array.length == 0 || low >= high) return;

		int middle = low + (high - low) / 2;
		int border = array[middle]; 

		int i = low, j = high; 
		while (i <= j) {
			while (array[i] < border) i++; 
			while (array[j] > border) j--; 
			if (i <= j) {
				int temp = array[i];
				array[i] = array[j];
				array[j] = temp;
				i++; 
				j--;
			}
		}

		if (low < j) quickSort(array, low, j);
		if (high > i) quickSort(array, i, high);
	}

	public static void main(String[] args) {
		int[] array = {1, 34, 5687, -1, 543, 3045, 73};
		quickSort(array, 0, array.length - 1);
		for (int i = 0; i < array.length; i++) {
			System.out.print(array[i] + "\n");
		}
	}
	
}

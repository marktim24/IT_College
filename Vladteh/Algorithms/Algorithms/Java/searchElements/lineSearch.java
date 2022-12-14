public class lineSearch {
	public static void linearSearch(int arr[], int element) {
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] == element) return i; 
		}
		return 0;
	}

	public static void main(String[] args) {
		int index = linearSearch(new int[] {1,2,3,4,5,6,7,8,9}, 0);
		System.out.println(9 + " Index of array: " + index);
	}
}

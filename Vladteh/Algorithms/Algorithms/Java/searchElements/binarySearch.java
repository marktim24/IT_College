public class binarySearch {
	int BinarySearch(int arr[], int element) {
		int i = 0, arrayLength = arr.length - 1; 

		while (i <= arrayLength) {
			int middle = i + (arrayLength) / 2; 

			if (arr[middle] == element)
				return middle;

			if (arr[middle] < element) 
				i = middle + 1; 

			else 
				arrayLength = middle - 1; 
		}
		return 0; 
	}

	public static void main(String[] args) {
		int arr[] = {1,2,3,4,5,6,7,8,9}; 

		BinarySearch ob = new binarySearch();
		int result = ob.binarySearch(arr, 1);

		if (result == 0)
			System.out.println("Element not found");
		else
			System.out.println("Element index: " + result);
	}
}

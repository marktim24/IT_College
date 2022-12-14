import java.lang.reflect.Array;
import java.util.Arrays;

public class exponentialSearch {
	
	public static int exponentialSearch(int[] arr, int element) {

		if (arr[0] == element) 
			return 0; 

		if (arr[arr.length - 1] == element)
			return arr.length;
		
		int i = 1; 

		while (i < arr.length && arr[i] <= element) {
			i *= 2; 
		}

		return Arrays.binarySearch(arr, i, element);
	}

	public static void main(String[] args) {
		int i = exponentialSearch(new int [] {1,2,3,4,5,6,7,8,9}, 9);
		System.out.println(9 + i);
	}
}

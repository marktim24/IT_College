public class bubbleSort_1D {
		public static void bubbleSort(int[] array) {

			for (int i = 0; i < array.length - 1; i++) {
				for (int j = 0; j < array.length - i - 1; j++) {
					if (array[j + 1] < array[j]) {
						int temp = array[j];
						array[j] = array[j+1];
						array[j+1] = temp;
					}
				}
			}
		}
	
		public static void main(String args[]) {
			int [] array = {1, 3, 6, -1, 12, 10};
			bubbleSort(array);
			for (int i = 0; i < array.length; i++) {
				System.out.print(array[i] + "\n");
			}
		}
}

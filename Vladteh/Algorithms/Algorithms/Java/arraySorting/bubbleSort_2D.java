public class bubbleSort_2D {
		public static int[][] bubbleSort(int[][] array) {
			int temp; 

			for (int i = 0; i < array.length; i++) {
				for (int j = 0; j < array[i].length; j++) {
					for (int k = 0; k < array.length; k++) {
						for (int l = 0; l < array[k].length; l++) {
							if (array[i][j] <= array[k][l]) {
								temp = array[i][j];
								array[i][j] = array[k][l];
								array[k][l] = temp;
							}
						}
					}
				}
			}
			return array;
		}
	
		public static void main(String args[]) {
			int[][] array = new int[][] {
			 {1, 3, 6, -1, 12, 10},
			 {1, 3, 3, -1, 12, 10},
			 {1, 3, 6, -4, 12, 10},
			 {1, 3, 6, -1, 5, 10},
			};
			bubbleSort(array);
			for (int i = 0; i < array.length; i++) {
				for (int j = 0; j < array[i].length; j++) {
					System.out.print(array[i][j] + " ");
				}
				System.out.println();
			}
		}
}

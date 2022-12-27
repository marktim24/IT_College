public class diffuculty_estimate_4 {

	//time: O(2^n), memory: O(n)
	public int getFibonacci (int n) {

		if (n == 0) {
			return 0;
		}

		if (n == 1) {
			return 1;
		}

		return getFibonacci(n-1) + getFibonacci(n-2);
	}

	// 5
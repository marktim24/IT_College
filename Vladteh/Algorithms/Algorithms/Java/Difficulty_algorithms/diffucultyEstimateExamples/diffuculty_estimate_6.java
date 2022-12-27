public class diffuculty_estimate_6 {

	//time: O(n), memory: O(1)

	public int getFibonacci (int n) {

		int prePrev = 0;
		int prev = 1;



		if (n == 0) {
			return prePrev;
		}

		if (n == 1) {
			return prev;
		}

		int count = 2;
		int fibonacci = 0;

		while (count <= n) {
			// fibonacci = fibonacci +
			fibonacci =+ pre + prePrev;
			prePrev = prev;
			prev = fibonacci;
			count++
		}
		return fibonacci;
	}

	// 5
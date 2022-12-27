public class diffuculty_estimate_5 {

	//time: O(n), memory: O(n)

	private final Map<Integer, Integer> map = new HashMap<>();

	public int getFibonacci (int n) {

		if (n == 0) {
			return 0;
		}

		if (n == 1) {
			return 1;
		}

		if (map.containsKey(n)) {
			return map.get(n);
		}

		int fibonacci = getFibonacci(n-1) + getFibonacci(n-2);
		map.put(n, fibonacci)
		return fibonacci;
	}

	// 5


public class Example3 {

	// time: O(n), memory: O(n)
	public int[] findTwoSum(int[] array) {
		Map<Integer, Integer> map = new HashMap<>();
		for (int i = 0; i < array.length; i++) {
			int dif = target - array[i];
			if (map.containsKey(dif)) {
				return new int[] {i, map.get(diff)};
			}
			map.put(array[i], i);
		}
		return new int[] {};
	}
	
}
	
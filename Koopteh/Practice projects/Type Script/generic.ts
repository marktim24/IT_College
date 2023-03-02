const getArray = <T>(array: T[]) => {
	return [...array]
}

const numberArray = getArray<number>([1, 2, 3])

const getArrayCopy = (array: number[]): number[] => {
	return [...array]
}

const numberArrayCopy: number[] = getArrayCopy([1, 2, 3])

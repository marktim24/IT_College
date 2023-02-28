type TypeImage = {
	path: string
	size: string
	name: string
}

interface IReview {
	review?: string[]
}

interface ICity extends IReview {
	name: string
	age: number
	email: string
	image: TypeImage
}

const city: ICity = {
	name: 'New York',
	age: 1200,
	email: '32131',
	image: {
		path: '123',
		size: '123',
		name: '123',
	},
	review: ['12312', '123123'],
}

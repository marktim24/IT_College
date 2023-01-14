export const getUserProfile = async (req, res) => {
	const user = {
		name: 'Mark',
		age: '43',
	}

	res.json(user)
}

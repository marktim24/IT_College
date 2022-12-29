const db = require('../user_database/db')

class UserController {
    async createUser(req, res) {
        const {username} = req.body
        const newUser = await db.query(`INSERT INTO users (username) values $1 RETURNING *`, [username])
        res.json(newUser)
    }

    async getUser(req, res) {

    }

    async updateUser(req, res) {

    }

    async deleteUser(req, res) {

    }



}

module.exports = new UserController()
exports


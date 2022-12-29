const Router = require('express')
const router = new Router()
const userController = require('../user_database/userController')

router.post('/user', userController.createUser)
router.get('/user', userController.getUser)
router.put('/user:id', userController.updateUser)
router.delete('/user:id', userController.deleteUser)

module.exports = router


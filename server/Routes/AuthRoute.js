const { Signup, Login, Project } = require('../Controllers/AuthController')
const router = require('express').Router()
const {userVerification}=require('../Middlewares/AuthMiddleware')

router.post('/signup', Signup)
router.get('/project', Project)

router.post('/login', Login)
router.post('/',userVerification)

module.exports = router

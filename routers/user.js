const router = require('express').Router()
const contoller=require('../controllers/user')


router.post('/', contoller.createUser) // creamos usuario
// router.get('/:id', contoller.searchUser)
// router.post('/', contoller.login)


module.exports=router;
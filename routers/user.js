const router = require('express').Router()
const contoller=require('../controllers/user')


router.post('/', contoller.createUser) // creamos usuario
router.get('/all',contoller.searchAll)//busca todos los usario
router.get('/:id', contoller.searchUser)//busca por id
router.put('/:put', contoller.updateContent)//modificar apellidos
router.delete('/', contoller.deleteUser)//modificar apellidos
module.exports=router;
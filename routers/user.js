const router = require('express').Router()
const controller = require('../controllers/user')
const middleware= require('../Middleware/functions')


router.post('/login',controller.loggin)// logeamos User
router.post('/', middleware.verificarToken,   controller.createUser) // creamos usuario
router.get('/all', controller.searchAll)//busca todos los usario
router.get('/:id', controller.searchUser)//busca por id
router.put('/:put', controller.updateContent)//modificar apellidos
router.delete('/', middleware.verificarToken ,controller.deleteUser)//Eliminar User
module.exports = router;


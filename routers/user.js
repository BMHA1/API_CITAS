const router = require('express').Router()
const controller = require('../controllers/user')
const middleware= require('../Middleware/functions')
const checkRole = require('../Middleware/decryptoken')

router.post('/login',controller.loggin)// logeamos User
router.post('/',   controller.createUser) // creamos usuario
router.get('/all', middleware.verificarToken,checkRole.role ,controller.searchAll)//busca todos los usario
router.get('/:id', controller.searchUser)//busca por id
router.put('/:put', controller.updateContent)//modificar apellidos
router.delete('/', middleware.verificarToken ,controller.deleteUser)//Eliminar User
module.exports = router;


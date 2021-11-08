const router = require('express').Router()
const controllers = require('../controllers/user')
const middleware= require('../Middleware/functions')


router.post('/login',controllers.loggin)// logeamos User
router.post('/', middleware.verificarToken,   controllers.createUser) // creamos usuario
router.get('/all', controllers.searchAll)//busca todos los usario
router.get('/:id', controllers.searchUser)//busca por id
router.put('/:put', controllers.updateContent)//modificar apellidos
router.delete('/', middleware.verificarToken ,controllers.deleteUser)//Eliminar User
module.exports = router;


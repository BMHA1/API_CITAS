const router = require('express').Router()
const controller = require('../controllers/appointment')


router.post('/', controller.createAppointment) // creamos citas
// router.get('/all',controller.searchAll)//busca todos los usario
// router.get('/:id',controller.searchUser)//busca por id
// router.put('/:put',controller.updateContent)//modificar apellidos
// router.delete('/',controller.deleteUser)//modificar apellidos
module.exports = router;

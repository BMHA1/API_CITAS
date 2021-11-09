
const router = require('express').Router();
const controller = require('../controllers/appointment.js');
const checkRole = require('../Middleware/decryptoken')
const checkToken = require('../Middleware/functions')


router.post('/',checkToken.verificarToken ,controller.createAppointment); // Método para crear la cita.
router.get('/all', checkToken.verificarToken, checkRole.role, controller.searchAll); // Método para poder ver todas las citas. (Solo para ADMIN)
// router.get('/:idUser', controller.searchAppointment)// Método para buscar las citas por el ID de Usuario.
router.put('/', controller.updateAppointment); // Método para modificar la fecha.
router.delete('/', checkToken.verificarToken, controller.deleteAppointment); // Método para que un usuario elimine todas sus citas
router.get('/searchall', controller.searchAllPending )

module.exports = router;


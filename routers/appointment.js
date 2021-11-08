const router = require ('express').Router();
const controller = require ('../controllers/appointment.js');

router.post(('/'), controller.createAppointment); // Método para crear la cita.
router.get(('/all'), controller.searchAll); // Método para poder ver todas las citas. (Solo para ADMIN)
router.get(('/:idUser'), controller.searchAppointment)// Método para buscar las citas por el ID de Usuario.
router.put(('/:put'), controller.updateAppointment); // Método para modificar la fecha.
router.delete(('/'), controller.deleteAppointment); // Método para borrar la cita. (Solo para ADMIN)


module.exports = router;
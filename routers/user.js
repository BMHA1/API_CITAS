const router = require ('express').Router();
const controller = require ('../controllers/user.js');

router.post(('/'), controller.createUser); // Método para crear el usuario.
router.get(('/all'), controller.searchAll); // Método para poder ver todos los usuarios. (Solo para ADMIN)
router.get(('/:id'), controller.searchUser)// Método para buscar usuarios por el ID.
router.put(('/:put'), controller.updateContent); // Método para modificar los valores del Usuario.
router.delete(('/'), controller.deleteUser); // Método para borrar el usuario. (Solo para ADMIN)

module.exports = router;
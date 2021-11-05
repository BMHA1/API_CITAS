const router = require ('express').Router();
const controller = require ('../controllers/user.js');

router.post(('/'), controller.createUser);

module.exports = router;
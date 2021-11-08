const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const moment = require("moment");
const { User, Appointment } = require('../models/index.js')
//generamos el hash para guardar la contraseña encriptada!
module.exports.createHash = (password) => {
    let encrypted = bcrypt.hashSync(password, 10)
    return encrypted
}
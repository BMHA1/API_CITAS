const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const moment = require("moment");
const { User, Appointment } = require('../models/index.js')
//generamos el hash para guardar la contraseña encriptada!
module.exports.createHash = (password) => {
    let encrypted = bcrypt.hashSync(password, 10)
    return encrypted
}
//function para comparar el hash para guardar la contraseña encriptada!
module.exports.compareHash = async (objectUser) => {

    try {
        const project = await User.findOne({ where: { mail: objectUser.mail } });
        if (project === null) {
            return false
        } else {
            let compare = bcrypt.compareSync(objectUser.password, project.password)
            if (compare) {
                const payload = {
                    data: project.id,
                    role: project.role,
                    iat: moment().unix(),
                    exp: moment().add(2, 'days').unix()
                }
                return jwt.sign(payload, process.env.TOKEN)
            }
        }
    } catch (error) {
        res.json({
            message: 'mail or password denegado.',
            errors: error,
            status: 400
        })
    }
}
//verificaToken
module.exports.verificarToken = (req, res, next) => {
    try {
        jwt.verify(req.headers.token, process.env.TOKEN)
        next()
    } catch (error) {
        res.json({ error: 'Acceso denegado, lo siento registrese.' })
    }
}
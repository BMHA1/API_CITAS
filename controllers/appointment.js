const { User, Appointment } = require('../models/index.js')
const { Op } = require("sequelize")
const decrypTuser = require('../Middleware/decryptoken')
const moment = require("moment");
const timeFunction = require('../helper/calcularfecha')
// Creamos una cita. (Aquí necesitamos middleware para autenticar USER)

module.exports.createAppointment = async (req, res) => {

    try {
        let user = decrypTuser.decryptken(req.headers.token)
        let { data } = user
        let dateAppoinment = req.body.date


        let virifyTime= timeFunction.difTime(dateAppoinment)

             
        let respond = await Appointment.create({
            date: dateAppoinment,
            state: 'pending',
            userId: data,
        })
        res.status(200).json({ data: respond });
    } catch (error) {
        res.status(400).send({
            message: 'No se ha podido generar una nueva cita.',
            errors: error,
            status: 400
        });
    }
}

// Buscamos una cita por ID.

module.exports.searchAppointment = (req, res) => {
    Appointment.findByPk(req.params.idUser)
        .then((appointment) => {
            if (!appointment) res.status(200).send('La cita no existe.')
            res.status(200).json({ data: Appointment })
        }, (error) => { res.status(400).send(error) })
}

// Buscamos todas las citas. (Aquí necesitamos middleware para autenticar ADMIN)

module.exports.searchAll = (req, res) => {
    User.findAll({})
        .then((appointments) => res.status(200).json({ Data: appointments }),
            (error) => { res.status(400), send(error) })
}

// Modificación de la cita.

module.exports.updateAppointment = (req, res) => {
    let modification = req.body
    // let clave=req.params.put
    Appointment.update(modification, {
        where: {
            date: null
        }
    })
        .then((modification) => res.status(200).json({ Data: modification }),
            (error) => { res.status(200), send(error) })
}

//Eliminar una cita por su ID.

module.exports.deleteAppointment = (req, res) => {
    let arr = Json.parse(res.query.id)
    Appointment.destroy({
        where: {
            id: {
                [Op.in]: arr
            }
        }
    })

}
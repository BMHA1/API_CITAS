const { User, Appointment, sequelize } = require('../models/index.js')
const { Op } = require("sequelize")
const decrypTuser = require('../Middleware/decryptoken')
const moment = require("moment");
const timeFunction = require('../helper/calcularfecha')
// Creamos una cita. (Aquí necesitamos middleware para autenticar USER)

module.exports.createAppointment = async (req, res) => {
    try {
        let user = decrypTuser.decryptoken(req.headers.token)
        // let {data} = user
        let verifyTime = timeFunction.difTime(req.body.date)
        if (verifyTime === false) {
            res.send('Fecha invalida')
        } else {
            let respond = await Appointment.create({
                date: verifyTime,
                state: 'pending',
                userId: user.data,
            })
            res.status(200).json({ data: respond });
        }
    } catch (error) {
        res.status(400).send({
            message: 'No se ha podido generar una nueva cita.',
            errors: error,
            status: 400
        });
    }
}
// Buscamos todas las citas. (Aquí necesitamos middleware para autenticar ADMIN)
module.exports.searchAll = async (req, res) => {
    try {

        let listAppointment = await Appointment.findAll({})
        res.status(200).json({ Data: listAppointment })

    } catch (error) {
        res.status(400).send({
            message: 'No tienes citas pendientes',
            status: 400
        });
    }

}
//buscamos citas por estado 'pending'
module.exports.searchAllPending = async (req, res) => {
    try {

        let result = await Appointment.findAll({
            where: {
                state: 'pending',
            }
        })
        res.status(200).json({ data: result });

    } catch (error) {
        res.status(400).send({
            message: 'No tienes citas pendientes',
            status: 400
        });
    }
}
// // Modificación de la cita, por alguna otra fecha
module.exports.updateAppointment = async (req, res) => {
    try {
        let resultUpdate = await Appointment.update({ date: req.body.fechaModificar }, {
            where: {
                date: req.body.fechaActual
            }
        })
        res.status(200).json({ data: `la fecha se ha ejecutado con exito a : ${req.body.fechaModificar}` });
    } catch (error) {
        res.status(400).send({
            message: 'La cita no se ha modificado',
            status: 400
        });
    }
}
//Eliminar cita por su ID
module.exports.deleteAppointment = (req, res) => {
    let user = decrypTuser.decryptoken(req.headers.token)
    Appointment.destroy({
        where: {
            userId: user.data
        }
    })
        .then(() => res.status(200).json({ Data: 'sean eliminados' }), () => { res.status(200), send("error") })
}
module.exports.deleteOne = async (req, res) => {
    try{

        let dateDelete = req.body
        console.log(dateDelete.AppointementDelete)
        let user = decrypTuser.decryptoken(req.headers.token)
        Appointment.destroy({
            where: {
                userId: user.data,
                date:dateDelete.AppointementDelete
            }
        })
        res.status(200).json({ data: `la  cita se ha eliminado con exito a : ${req.body.AppointementDelete}` });

    }catch(error) {
        res.status(400).send({
            message: 'ha habido un problema',
            status: 400
        });
    }
        
}
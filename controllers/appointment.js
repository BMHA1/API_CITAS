
const { User, Appointment } = require('../models/index.js')


module.exports.createAppointment = async (req, res) => {
    try {
        console.log(req.body)
        const newAppointment = req.Appointment
        await Appointment.create(newAppointment)
        res.status(200).json({ appointment: newAppointment });
    } catch (error) {
        res.status(400).send({
            message: 'No se ha podido generar un nuevo usuario.',
            errors: error,
            status: 400
        });
    }
}
const { User, Appointment } = require('../models/index.js')


module.exports.createUser = async (req, res) => {

    try {
        console.log(req.body)
        const newUser = req.body

        await User.create(newUser)

        res.status(200).json({ user: newUser });

    } catch (error) {
        return res.status(400).send({
            message: 'No se ha podido generar un nuevo usuario.',
            errors: error,
            status: 400
        });
    }
}

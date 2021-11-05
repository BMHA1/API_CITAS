const { User } = require('../models/index.js')

module.exports.createUser = async (req, res) => {
    try {
        const userDetails = req.body
        await User.create(userDetails);
        res.status(200).send({
            status: 200,
            message: 'Se ha generado un nuevo usuario.',
            data: {userDetails}
        });
    }
    catch (error) {
        return res.status(400).send({
            message: 'No se ha podido generar un nuevo usuario.',
            errors: error,
            status: 400
        });
    }
}
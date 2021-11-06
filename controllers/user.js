<<<<<<< HEAD
// const { where } = require('sequelize/types')
const { User, Appointment } = require('../models/index.js')
const { Op } = require("sequelize")
// const { Module } = require('module')
// const { Json } = require('sequelize/types/lib/utils')



//creamos usuario
module.exports.createUser = async (req, res) => {

    try {
        console.log(req.body)
        const newUser = req.body

        await User.create(newUser)

        res.status(200).json({ user: newUser });

    } catch (error) {
        res.status(400).send({
=======
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
>>>>>>> d072ee86174de3fd00bb796382b72a7527f7437a
            message: 'No se ha podido generar un nuevo usuario.',
            errors: error,
            status: 400
        });
    }
<<<<<<< HEAD
}
//buscamos Usuario
module.exports.searchUser = (req, res) => {

    User.findByPk(req.params.id)
 
    .then((user) => {
            if (!user) res.status(200).send('El usuario no existe')
            res.status(200).json({ data: user })
        }, (error) => { res.status(400).send(error) })
}
//Buscamos todos los usarios
module.exports.searchAll = (req, res) => {
    User.findAll({})
        .then((users) => res.status(200).json({ Data: users }),
            (error) => { res.status(400), send(error) })
}
//Modificación del apellido
module.exports.updateContent = (req, res) => {
    let modification = req.body
    // let clave=req.params.put
    User.update(modification, {
        where: {
            lastaname: null
        }
    })
        .then((modification) => res.status(200).json({ Data: modification }),
            (error) => { res.status(200), send(error) })
}


//Eliminar un usuario por su ID
module.exports.deleteUser = (req, res) => {
    console.log(res.query.id)
    let arr= Json.parse(res.query.id)
    User.destroy({
        where: {

            id:{
                [Op.in]: arr
            }

        }
    })
}


=======
}
>>>>>>> d072ee86174de3fd00bb796382b72a7527f7437a

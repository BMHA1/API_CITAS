
// const { where } = require('sequelize/types')
const { User, Appointment } = require('../models/index.js')
const { Op, DATE } = require("sequelize")
// const { Module } = require('module')
// const { Json } = require('sequelize/types/lib/utils')
const hashing = require('../Middleware/functions')
const { Console } = require('console')

//creamos usuario
module.exports.createUser = async (req, res) => {
    try {
        console.log(req.body)

        const newUser = req.body 

        newUser.password = hashing.createHash(newUser.password)
        await User.create(newUser)
        res.status(200).json({ user: newUser });
    } catch (error) {
        res.status(400).json({
            message: 'No se ha podido generar un nuevo usuario.',

        });

    }
}

//buscamos Usuario

module.exports.searchUser = (req, res) => {
    try{
        User.findByPk(req.params.id)
        .then((user) => {
            if (!user) res.status(200).send('El usuario no existe')
            res.status(200).json({ data: user })
        }) 
    }catch (error) {
        res.json({
            message: 'Usuario no encontrado.',
            errors: error,
            status: 400
        })
    }
}

// Buscamos todos los usarios

module.exports.searchAll = async(req, res) => {

    try{
      let users = await User.findAll({})
       res.status(200).json({ Data: users }))
    }catch (error) {
        res.json({
            message: 'No eres admin.',
            errors: error,
       })
     }
  }



//login
module.exports.loggin = async (req, res) => {
    try {
        let hashDescoted = await hashing.compareHash(req.body)
        console.log(hashDescoted)
        res.status(200).json({ hashDescoted })
    } catch (error) {
        res.json({
            message: 'mail or password denegado.',
            errors: error,
            status: 400
        })
    }
}

'use strict';

const {  Model  } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
        static associate(models) {}
  };

  User.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.FLOAT,
    role: DataTypes.STRING,
    age: DataTypes.STRING,
    adress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
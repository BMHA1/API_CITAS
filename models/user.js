'use strict';
<<<<<<< HEAD
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
=======

const {  Model  } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
        static associate(models) {}
  };

>>>>>>> d072ee86174de3fd00bb796382b72a7527f7437a
  User.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.FLOAT,
    role: DataTypes.STRING,
    age: DataTypes.STRING,
<<<<<<< HEAD
    address: DataTypes.STRING
=======
    adress: DataTypes.STRING
>>>>>>> d072ee86174de3fd00bb796382b72a7527f7437a
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
'use strict';
const {
  Model
} = require('sequelize');
const { all } = require('../routes');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // define association here
      roles.belongsToMany(models.user,{
        through:'user_roles',
      });
    }
  }
  roles.init({
    name: {type:DataTypes.STRING,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};
'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    verifyPassword(pass) {
      return bcrypt.compareSync(pass, this.password)
    }
  };
  user.init({
    email: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true,
        isEmail: true,
      }
    },
    username: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true,
        len: [4, 20]
      }
    },
    password: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true,
        len: [8, 50]
      }
    },
    karma: DataTypes.INTEGER,
    profileImage: DataTypes.STRING,
    followedSubs: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  user.addHook('afterValidate', (user, options) => {
    const hashedPassword = bcrypt.hashSync(user.password, 10)
    user.password = hashedPassword
  })
  return user;
};
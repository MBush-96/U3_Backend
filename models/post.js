'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  post.init({
    title: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        len: [4, 20],
        notNull: true
      }
    },
    body: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true
      }
    },
    userId: DataTypes.INTEGER,
    numLikes: DataTypes.INTEGER,
    numDislikes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subreddit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.subreddit.hasMany(models.post)
    }
  };
  subreddit.init({
    name: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true
      }
    },
    followers: DataTypes.INTEGER,
    rules: DataTypes.STRING,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'subreddit',
  });
  return subreddit;
};
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    static associate() {}
  }
  Video.init(
    {
      userId: DataTypes.INTEGER,
      filename: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Video',
      tableName: 'videos',
    },
  );
  return Video;
};

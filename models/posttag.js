'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostTag = sequelize.define('PostTag', {
    PostId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {});
  PostTag.associate = function(models) {
    // associations can be defined here
    PostTag.belongsTo(models.Post)
    PostTag.belongsTo(models.Tag)
  };
  return PostTag;
};
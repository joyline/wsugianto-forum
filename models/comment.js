'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    message: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    forumId: DataTypes.INTEGER
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
    Comments.belongsTo(models.Users, { foreignKey: "userId" });
    Comments.belongsTo(models.Forums, { foreignKey: "forumId" });
  };
  return Comments;
};
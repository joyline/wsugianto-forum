'use strict';
module.exports = (sequelize, DataTypes) => {
  const Forums = sequelize.define('Forums', {
    forumName: DataTypes.STRING,
    forumDescription: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Forums.associate = function(models) {
    // associations can be defined here
    Forums.hasMany(models.Comments, {foreignKey: 'forumId'})
    Forums.belongsTo(models.Users, { foreignKey: 'userId' }) 
    Forums.hasMany(models.ConnectForumTags, {foreignKey: 'forumId'})
    // Forums.belongsToMany(models.Tags, {as: 'forumTag', through: 'ConnectForumTags'})
    // Forums.belongsToMany(models.Tags, {through: "ConnectForumTags"})
    // Forums.belongsToMany(models.Tags, {as: 'tags',through: 'ConnectForumTags'})
  };
  return Forums;
};
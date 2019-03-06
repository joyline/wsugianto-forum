'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConnectForumTags = sequelize.define('ConnectForumTags', {
    tagId: DataTypes.INTEGER,
    forumId: DataTypes.INTEGER
  }, {});
  ConnectForumTags.associate = function(models) {
    // associations can be defined here
    ConnectForumTags.belongsTo(models.Forums, {foreignKey: 'forumId'});
    ConnectForumTags.belongsTo(models.Tags, {foreignKey: 'tagId'});
    
  };
  return ConnectForumTags;
};
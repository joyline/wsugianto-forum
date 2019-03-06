'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tags', {
    tagName: DataTypes.STRING
  }, {});
  Tags.associate = function(models) {
    // associations can be defined here
    Tags.hasMany(models.ConnectForumTags, {foreignKey: 'id'});
    // Tags.belongsToMany(models.Forums, {through: "ConnectForumTags"})

  };
  return Tags;
};
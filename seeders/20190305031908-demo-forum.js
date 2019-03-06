'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Forums', [
    {
      id: 1,
      forumName: 'Develop VueJS',
      forumDescription: 'in vue is all progressive',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      forumName: 'pubg is boring',
      forumDescription: 'nevermind pubg',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      forumName: 'life is awesome',
      forumDescription: 'just to let you know',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Forums', null, {});
  }
};

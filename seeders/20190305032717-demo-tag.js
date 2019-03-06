'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Tags', [
      {
        id: 1,
        tagName: 'Gaming',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        tagName: 'Life',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        tagName: 'Coding',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        tagName: 'Developer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Tags', null, {});
  }
};

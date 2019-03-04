'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@yahoo.com',
      password: 'john',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      firstName: 'Johanes',
      lastName: 'Does',
      email: 'johanes@yahoo.com',
      password: 'johanes',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      firstName: 'Joan',
      lastName: 'Do',
      email: 'joan@yahoo.com',
      password: 'joan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};

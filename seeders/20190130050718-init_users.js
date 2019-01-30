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
   return queryInterface.bulkInsert('Users',[{
     username: 'eltim1',
     password: 'eltim1',
     email: 'eltim@gmail.com',
     profilepic: null,
     createdAt: new Date(),
     updatedAt: new Date()
   },
  {
    username: 'ilham1',
    password: 'ilham2',
    email: 'ilham@gmail.com',
    profilepic: null,
    createdAt: new Date(),
    updatedAt: new Date()
  }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users',null,{})
  }
};

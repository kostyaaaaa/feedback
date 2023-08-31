'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        firstName: 'Kostyantyn',
        lastName: 'Arabadzhi',
        email: 'kostyaarabadji@gmail.com',
        password: '123456',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: 'Evhenii',
        lastName: 'Syrovatka',
        email: 'evsyrovatka@gmail.com',
        password: '123456',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        firstName: 'Rodion',
        lastName: 'Ivanov',
        email: 'ivanovrodion.io92@gmail.com',
        password: '123456',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};

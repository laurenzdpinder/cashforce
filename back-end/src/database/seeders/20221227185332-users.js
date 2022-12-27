'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'ALLAN SOUZA',
        email: 'allan@cashforce.com.br',
        verification_code: '',
        email_checked: true,
        created_at: '2020-10-01 21:31:37',
        updated_at: '2020-10-01 22:41:23',
        cashforce_adm: true,
      }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

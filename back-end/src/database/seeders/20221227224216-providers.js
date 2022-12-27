'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('providers', [
      {
        id: 1,
        name: 'CEDENTE 002',
        trading_Name: 'CEDENTE 002 LTDA',
        created_at: '2020-10-29 21:22:21',
        updated_at: '2020-10-29 21:22:21',
        cnpj_id: 2
      }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('providers', null, {});
  }
};

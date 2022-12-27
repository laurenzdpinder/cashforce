'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('buyers', [
      {
        id: 1,
        name: 'SACADO 001',
        trading_name: 'SACADO 001 LTDA',
        cashforce_tax: '0',
        created_at: '2020-10-29 21:20:33',
        updated_at: '2020-10-29 21:20:34',
        cnpj_id: 1,
        confirm: true,
      }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('buyers', null, {});
  }
};

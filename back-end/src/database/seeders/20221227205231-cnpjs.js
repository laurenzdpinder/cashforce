'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('cnpjs', [
      {
        id: 1,
        cnpj: '00000000000001',
        company_type: '2',
        created_at: '2020-10-29 21:20:33',
        updated_at: '2020-10-29 21:20:33',
      },
      {
        id: 2,
        cnpj: '00000000000002',
        company_type: '1',
        created_at: '2020-10-29 21:20:33',
        updated_at: '2020-10-29 21:20:33',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('cnpjs', null, {});
  }
};

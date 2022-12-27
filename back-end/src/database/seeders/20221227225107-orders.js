'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('orders', [
      {
        id: 1,
        order_nf_id: '1605181324132',
        order_number: '18153',
        emission_date: '2020-10-30T11:00:00-03:00',
        emited_to: '22843980000127',
        n_nf: '18153',
        CTE: '',
        value: '198450',
        created_at: '2020-10-30 17:54:18',
        updated_at: '2020-10-30 17:54:18',
        cnpj_id: 1,
        user_id: 1,
        buyer_id: 1,
        provider_id: 1,
        order_status_buyer: '0',
        order_status_provider: '0'
      },
      {
        id: 2,
        order_nf_id: '160518132413',
        order_number: '18157',
        emission_date: '2020-11-04T15:32:35-02:00',
        emited_to: '35705180000272',
        n_nf: '18157',
        CTE: '',
        value: '168850',
        created_at: '2020-11-10 18:33:46',
        updated_at: '2020-11-10 18:33:46',
        cnpj_id: 1,
        user_id: 1,
        buyer_id: 1,
        provider_id: 1,
        order_status_buyer: '0',
        order_status_provider: '0'
      },
      {
        id: 3,
        order_nf_id: '1605181324130',
        order_number: '18184',
        emission_date: '2020-11-10',
        emited_to: '00418477002640',
        n_nf: '18184',
        CTE: '',
        value: '222795',
        created_at: '2020-11-12 11:42:06',
        updated_at: '2020-11-18 12:22:14',
        cnpj_id: 1,
        user_id: 1,
        buyer_id: 1,
        provider_id: 1,
        order_status_buyer: '7',
        order_status_provider: '3'
      }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};

<template>
  <table class="home-table">
    <thead>
      <tr>
        <th>NOTA FISCAL</th>
        <th>SACADO</th>
        <th>CEDENTE</th>
        <th>EMISSÃO</th>
        <th>VALOR</th>
        <th>STATUS</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.nNf }}</td>
        <td>{{ order.buyer.name }}</td>
        <td>{{ order.provider.name }}</td>
        <td>{{ order.emissionDate }}</td>
        <td>{{ order.value }}</td>
        <td>{{ order.orderStatusBuyer }}</td>
        <button @click="viewProvider(order.providerId)">Dados do cedente</button>
      </tr>
    </tbody>
  </table>
</template>

<script>
import fetchOrders from '../api/ordersApi';

export default {
  name: 'CashforceTable',
  data() {
    return {
      orders: [],
    };
  },
  async mounted() {
    const orders = await fetchOrders();
    this.orders = orders;
  },
  methods: {
    viewProvider(id) {
      this.$router.push(`/providers/${id}`);
    },
  },
};
</script>

<style>

</style>

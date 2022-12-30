<template>
  <table>
    <thead>
      <tr>
        <td>Nome</td>
        <td>Nome Comercial</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ provider.name }}</td>
        <td>{{ provider.tradingName }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import fetchProviderbyId from '../api/providersApi';

export default {
  name: 'CashforceProvider',
  data() {
    return {
      provider: [],
    };
  },
  async mounted() {
    const provider = await fetchProviderbyId(this.$route.params.id);
    this.provider = provider;
    console.log(provider);
  },
};
</script>

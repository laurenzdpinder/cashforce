<template>
  <div class="provider-info">
    <div>
      <p>Nome</p>
      <p>Nome Comercial</p>
      <p>CNPJ</p>
      <p>Telefone</p>
      <p>E-mail</p>
      <p>Website</p>
      <p>Endereço</p>
      <p>Cidade</p>
      <p>Estado</p>
      <p>Banco</p>
      <p>Agência e Conta</p>
    </div>
    <div>
      <p>{{ provider.name }}</p>
      <p>{{ provider.tradingName }}</p>
      <p>Mock</p>
      <p>Mock</p>
      <p>{{ provider.email || 'Não informado' }}</p>
      <p>Mock</p>
      <p>Mock</p>
      <p>Mock</p>
      <p>Mock</p>
      <p>Mock</p>
      <p>Mock</p>
    </div>
  </div>
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

<style>
.provider-info {
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 10px 0;
  width: 100%;
}

/* .provider-info div:nth {
  border: 1px solid black;
  margin: 10px;
} */

.provider-info p {
  border-bottom: 1px solid #A1A8B8;
  color: #A1A8B8;
  line-height: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  padding: 15px 275px 5px 25px;
  text-align: left;
}

/* .provider-info div:nth-child(1) {
  border: 1px solid red;
}

.provider-info div:nth-child(2) {
  border: 1px solid blue;
} */
</style>

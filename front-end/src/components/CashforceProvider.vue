<template>
  <div class="provider-info">
    <div class="provider-info-div">
      <h3>Dados do cedente</h3>
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
    <div class="provider-info-div">
      <h3 style="color: #FFFFFF;">''</h3>
      <p>{{ provider.name }}</p>
      <p>{{ provider.tradingName }}</p>
      <p>{{ provider.cnpj }}</p>
      <p>{{ provider.number || 'Não informado' }}</p>
      <p>{{ provider.email || 'Não informado' }}</p>
      <p>{{ provider.website || 'Não informado' }}</p>
      <p>{{ provider.adress || 'Não informado' }}</p>
      <p>{{ provider.city || 'Não informado' }}</p>
      <p>{{ provider.state || 'Não informado' }}</p>
      <p>{{ provider.bank || 'Não informado' }}</p>
      <p>{{ provider.bankAgency || 'Não informado' }}</p>
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
    this.provider = { ...provider, cnpj: provider.cnpj.cnpj };
  },
};
</script>

<style>
.provider-info {
  display: flex;
  justify-content: center;
  padding: 0 48px 0 47px;
  width: 100%;
}

.provider-info-div {
  width: 50%;
}

.provider-info h3 {
  border-bottom: 1px solid #021B51;
  color: #021B51;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 30px;
  text-align: left;
}

.provider-info p {
  border-bottom: 1px solid #A1A8B8;
  color: #A1A8B8;
  line-height: 26px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  padding: 10px 0;
  text-align: left;
}
</style>

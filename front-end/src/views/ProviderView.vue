<template>
  <div class="provider">
    <CashforceSidebar />
    <div class="provider-main">
      <div class="blank-space" />
      <div class="provider-title">
        <h3>Dados do Cedente</h3>
        <CashforceProvider />
      </div>
    </div>
  </div>
</template>

<script>
import CashforceSidebar from '@/components/CashforceSidebar.vue';
import CashforceProvider from '@/components/CashforceProvider.vue';

export default {
  name: 'ProviderView',
  components: {
    CashforceSidebar,
    CashforceProvider,
  },
};
</script>

<style scoped>
.provider {
  display: flex;
  min-width: 1340px;
}

.provider-main {
  /* align-items: center; */
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 100%;
}

.provider-title {
  /* align-items: center; */
  /* border: 1px solid green; */
  /* display: flex;
  flex-direction: column; */
}

.provider-main h3 {
  /* border-bottom: 1px solid #021B51; */
  /* border: 1px solid #021B51; */
  /* display: flex; */
  color: #021B51;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  /* margin: 10px; */
  /* margin-left: 135px; */
  margin-bottom: 10px;
  text-align: center;
  /* width: 23%; */
}
</style>

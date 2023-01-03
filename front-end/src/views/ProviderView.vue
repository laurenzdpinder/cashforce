<template>
  <div class="provider">
    <CashforceSidebar />
    <div class="provider-main">
      <div class="blank-space" />
      <CashforceProvider />
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
  width: 100%;
}
</style>

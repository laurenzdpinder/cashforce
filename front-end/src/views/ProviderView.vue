<template>
  <div class="provider">
    <CashforceSidebar />
    <div>
      <h1>Hello, Provider</h1>
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

<style>
.provider {
  border: 1px solid black;
  display: flex;
}
</style>

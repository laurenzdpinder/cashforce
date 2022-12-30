<template>
  <div class="home">
    <CashforceSidebar />
    <div class="test2">
      <h1>Home</h1>
      <CashforceTable />
    </div>
  </div>
</template>

<script>
import CashforceSidebar from '@/components/CashforceSidebar.vue';
import CashforceTable from '@/components/CashforceTable.vue';

export default {
  name: 'HomeView',
  components: {
    CashforceSidebar,
    CashforceTable,
  },
};
</script>

<style>
.home {
  border: 1px solid black;
  display: flex;
}

.test2 {
  border: 2px solid red;
}

.home h1 {
  border: 1px solid black;
}
</style>

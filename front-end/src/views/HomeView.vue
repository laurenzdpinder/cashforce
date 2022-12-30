<template>
  <div class="home">
    <div class="test1">
      <CashforceSidebar />
    </div>
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

<style scoped>
.home {
  border: 1px solid black;
  display: flex;
}

.test1 {
  border: 2px solid blue;
  width: 20%;
}

.test2 {
  border: 2px solid red;
  width: 80%;
}

.home h1 {
  border: 1px solid black;
}
</style>

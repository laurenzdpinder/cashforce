<template>
  <div class="home">
    <div>
      <CashforceSidebar />
    </div>
    <div>
      <h1>Home</h1>
    </div>
  </div>
</template>

<script>

import CashforceSidebar from '@/components/CashforceSidebar.vue';

export default {
  name: 'HomeView',
  components: {
    CashforceSidebar,
  },
};

</script>

<style scoped>
.home {
  border: 1px solid red;
  display: flex;
}

.home div {
  border: 1px solid black;
}

.home h1 {
  border: 1px solid black;
}
</style>

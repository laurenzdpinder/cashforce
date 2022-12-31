<template>
  <div class="home">
    <CashforceSidebar />
    <div class="home-main">
      <div class="blank-space" />
      <div class="home-title">
        <h3>Notas fiscais</h3>
        <p>Vizualize as notas fiscais que você tem.</p>
      </div>
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
  border: 2px solid black;
  display: flex;
  font-family: DM Sans;
}

.home-main {
  border: 1px solid red;
  margin: 0 48px;
  width: 100%;
}

.blank-space {
  border-bottom: 1px solid #DFE2EB;
  height: 64px;
  margin-bottom: 40px;
}

.home-title {
  border: 1px solid black;
  text-align: left;
}

.home-title h3 {
  border: 1px solid black;
  color: #021B51;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin: 0;
}

.home-title p {
  border: 1px solid black;
  color: #727D94;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}
</style>

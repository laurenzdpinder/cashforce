<template>
  <div class="home">
    <CashforceSidebar />
    <div class="home-main">
      <div class="blank-space" />
      <header class="home-title">
        <div>
          <img src="../assets/blue-hands.png" alt="Blue handshake emoji" />
          <h3>Notas fiscais</h3>
        </div>
        <p>Vizualize as notas fiscais que você tem.</p>
      </header>
      <CashforceInvoice />
    </div>
  </div>
</template>

<script>
import CashforceSidebar from '@/components/CashforceSidebar.vue';
import CashforceInvoice from '@/components/CashforceInvoice.vue';

export default {
  name: 'HomeView',
  components: {
    CashforceSidebar,
    CashforceInvoice,
  },
};
</script>

<style>
.home {
  /* border: 1px solid black; */
  display: flex;
  height: 100vh;
  /* font-family: 'DM Sans'; */
  min-width: 1340px;
}

.home-main {
  /* border: 1px solid red; */
  width: 100%;
}

.blank-space {
  border-bottom: 1px solid #DFE2EB;
  height: 64px;
  margin-bottom: 40px;
}

.home-title {
  /* border: 1px solid black; */
  text-align: left;
  margin: 0 47px 0 48px;
}

.home-title div {
  align-items: center;
  /* border: 1px solid black; */
  display: flex;
}

.home-title img {
  /* border: 1px solid black; */
  height: 14.06px;
  margin-right: 9px;
  width: 24px;
}

.home-title h3 {
  /* border: 1px solid black; */
  color: #021B51;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  margin: 0;
}

.home-title p {
  /* border: 1px solid black; */
  color: #727D94;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}
</style>

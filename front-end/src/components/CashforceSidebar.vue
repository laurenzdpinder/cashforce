<template>
  <aside>
    <div class="side-logo">
      <img src="../assets/logo.png" alt="Cashforce logo" />
    </div>
    <router-link to="/">
      <div class="side-invoice">
        <img src="../assets/green-hands.png" alt="Green handshake emoji" />
        <p>Notas fiscais</p>
      </div>
    </router-link>
  </aside>
</template>

<script>
export default {
  name: 'CashforceSidebar',
};
</script>

<style>
aside {
  background-color: #FBFDFE;
  height: 100vh;
  min-width: 288px;
}

.side-logo {
  height: 80px;
}

.side-logo img {
  height: 80px;
  width: 288px;
}

.side-invoice {
  align-items: center;
  display: flex;
  margin-top: 23px;
}

.side-invoice img {
  height: 14.06px;
  margin-left: 25px;
  width: 24px;
}

.side-invoice p {
  color: #00AD8C;
  line-height: 18px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-align: left;
  margin: 0 15px;
}
</style>

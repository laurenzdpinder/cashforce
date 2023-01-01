<template>
  <aside>
    <div>
      <h1>Cashforce</h1>
    </div>
    <div>
      <p>img</p>
      <p>Notas fiscais</p>
    </div>
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
  min-width: 288px;
}

aside div:nth-child(1) {
  /* border: 1px solid black; */
  height: 80px;
}

aside div:nth-child(2) {
  /* border: 1px solid black; */
  display: flex;
  margin-top: 23px;
}

aside p:nth-child(1) {
  color: #00AD8C;
  line-height: 18px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-align: left;
  padding-left: 25px;
}

aside p:nth-child(2) {
  /* border: 1px solid black; */
  color: #00AD8C;
  line-height: 18px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-align: left;
  padding: 0 15px;
}
</style>

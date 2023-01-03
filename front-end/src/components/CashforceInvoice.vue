<template>
  <main class="invoice">
    <section class="invoice-head">
      <p>NOTA FISCAL</p>
      <p>SACADO</p>
      <p>CEDENTE</p>
      <p>EMISSÃO</p>
      <p>VALOR</p>
      <p>STATUS</p>
      <p></p>
    </section>
    <section class="invoice-body" v-for="order in orders" :key="order.id">
      <p>{{ order.nNf }}</p>
      <p>{{ order.buyer.name }}</p>
      <p>{{ order.provider.name }}</p>
      <p>{{ formatEmissionDate(order.emissionDate) }}</p>
      <p>{{ formatValue(order.value) }}</p>
      <p :style="{ color: statusColors[order.orderStatusBuyer] }">
        {{ formatStatus(order.orderStatusBuyer) }}
      </p>
      <button @click="viewProvider(order.providerId)">Dados do cedente</button>
    </section>
  </main>
</template>

<script>
import fetchOrders from '../api/ordersApi';

export default {
  name: 'CashforceInvoice',
  data() {
    return {
      orders: [],
      statusColors: {
        0: '#adad00',
        1: '#00AD8C',
        2: '#ad0000',
        3: '#ad0000',
        4: '#ad0000',
        5: '#ad0000',
        6: '#adad00',
        7: '#00AD8C',
        8: '#00AD8C',
      },
    };
  },
  async mounted() {
    const orders = await fetchOrders();
    this.orders = orders;
  },
  methods: {
    viewProvider(id) {
      this.$router.push(`/providers/${id}`);
    },
    formatEmissionDate(dateString) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      }).format(date);
    },
    formatValue(value) {
      const fixedNumber = parseFloat(value).toFixed(2);
      const parts = fixedNumber.split('.');
      const localNumber = parseFloat(parts[0]).toLocaleString('pt-BR');
      const formatedValue = localNumber.concat(',', parts[1]);
      return `R$ ${formatedValue}`;
    },
    formatStatus(status) {
      const statusArray = [
        'Pendente de confirmação',
        'Pedido confirmado',
        'Não reconhece o pedido',
        'Mercadoria não recebida',
        'Recebida com avaria',
        'Devolvida',
        'Recebida com devolução parcial',
        'Recebida e confirmada',
        'Pagamento Autorizado',
      ];
      const numberStatus = parseFloat(status);
      const formatedStatus = statusArray[numberStatus];
      return formatedStatus;
    },
  },
};
</script>

<style>
.invoice {
  margin: 0 47px 0 48px;
}

.invoice section {
  padding: 15px 10px 15px 30px;
  height: 48px;
}

.invoice p {
  align-items: center;
  display: flex;
  justify-content: left;
  text-align: left;
  width: 110px;
}

.invoice-head {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 19px;
}

.invoice-head p {
  color: #A1A8B8;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
}

.invoice-head p:last-child {
  width: 165px;
}

.invoice-body {
  align-items: center;
  border: 1px solid #DFE2EB;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.invoice-body p {
  color: #4D5566;
  font-style: normal;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}

.invoice-body p:nth-child(5) {
  color: #00AD8C;
  margin-left: 0;
}

.invoice-body p:nth-child(6) {
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
}

.invoice button {
  background-color: #FFFFFF;
  border: 1px solid #DFE2EB;
  border-radius: 24px;
  color: #727D94;
  cursor: pointer;
  height: 32px;
  line-height: 16px;
  font-style: normal;
  font-size: 12px;
  font-weight: 700;
  width: 165px;
}

.invoice button:hover {
  border: 1px solid #00AD8C;
  color: #00AD8C;
  transition: 0.2s;
}
</style>

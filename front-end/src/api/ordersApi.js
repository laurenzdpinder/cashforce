export default async function fetchOrders() {
  const data = await fetch('http://localhost:3001/orders', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8080',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());

  return data;
}

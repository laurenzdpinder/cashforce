export default async function fetchProviderbyId() {
  const data = await fetch('http://localhost:3001/providers/1', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8080/providers/1',
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());

  return data;
}

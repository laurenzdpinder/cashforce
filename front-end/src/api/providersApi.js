export default async function fetchProviderbyId(id) {
  const data = await fetch(`http://localhost:3001/providers/${id}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': `http://localhost:8080/providers/${id}`,
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());

  return data;
}

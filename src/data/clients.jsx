async function getClients() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export { getClients };

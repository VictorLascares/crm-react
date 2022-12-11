async function getClients() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function addClient(values) {
  try {
    await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export { getClients, addClient };

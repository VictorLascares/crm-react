async function getClients() {
  const response = await fetch(import.meta.env.VITE_API_URL);
  const result = await response.json();
  return result;
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

async function getClient(id) {
  const url = `${import.meta.env.VITE_API_URL}/${id}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

async function updateClient(id, values) {
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export { getClients, addClient, getClient, updateClient };

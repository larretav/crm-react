export const getClientes = async () => {
  
  const resp = await fetch(import.meta.env.VITE_API_URL);
  const respData = await resp.json();

  return respData;
}

export const getCliente = async (id) => {
  
  const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const respData = await resp.json();

  return respData;
}


export const addCliente = async (cliente) => {
  try {
    const resp = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    await resp.json();

  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

export const updateCliente = async (id) => {

  try {
    const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    await resp.json();

  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export const deleteCliente = async (id) => { 
  try {
    const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE',
    });

    await resp.json();

  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

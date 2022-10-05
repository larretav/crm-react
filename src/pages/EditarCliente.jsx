import { getCliente } from "../api/clientes"

export const loader = async ({params}) => { 
  const cliente = await getCliente(params.clienteId);

  if(Object.values(cliente).length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'No hay resultados'
    })
  }

  return cliente;
}


const EditarCliente = () => {
  return (
    <div>EditarCliente</div>
  )
}

export default EditarCliente
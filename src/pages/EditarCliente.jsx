import { Form, redirect, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import { getCliente, updateCliente } from "../api/clientes"
import Error from "../components/Error";
import Formulario from "../components/Formulario";

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

export const action = async ({request, params}) => { 
  const formData = await request.formData();
  const newCliente = Object.fromEntries(formData);
  
  const errors = [];

  if( Object.values(newCliente).includes("") ){
    errors.push("Todos los campos son obligatorios")
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if (!regex.test(newCliente.email)) {
    errors.push("El email no es válido");
  }

  if(Object.keys(errors).length) return errors;

  // Actualizar cliente
  await updateCliente(params.clienteId, newCliente);
  return redirect('/');
};



const EditarCliente = () => {

  const navigate = useNavigate(); 
  const cliente = useLoaderData();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar cliente</h1>
      <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button 
          className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-transparent hover:text-blue-500 hover:outline-2 hover:outline hover:outline-blue-500 transition-all duration-200"
          onClick={ () => navigate(-1) }
        >
          Volver
        </button>
      </div>

      <div className="mx-auto mt-10 px-5 py-10 bg-white shadow-lg rounded-lg md:w-3/4">

        {
          errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error> )
        }

        <Form method='POST' noValidate >
          <Formulario cliente={cliente}/>

          <input 
            type="submit"
            className="mt-5 w-full rounded-lg bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:bg-blue-700 cursor-pointer transition-all ease duration-150"
            value="Actualizar"
          />
        </Form> 
      </div>
    </>
  )
}

export default EditarCliente
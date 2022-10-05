import React from 'react'
import { Form, redirect, useActionData, useNavigate } from 'react-router-dom'
import { addCliente } from '../api/clientes';
import Error from '../components/Error';
import Formulario from '../components/Formulario';

export const action = async ({request}) => {
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

  await addCliente(newCliente);

  return redirect('/');

}

const NuevoCliente = () => {

  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
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
          <Formulario />

          <input 
            type="submit"
            className="mt-5 p-3 w-full rounded-lg bg-blue-800 uppercase font-bold text-white text-lg hover:bg-blue-700 cursor-pointer transition-all ease duration-150"
            value="Registrar"
          />
        </Form> 
      </div>

    </>
  )
}

export default NuevoCliente
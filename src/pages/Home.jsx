import { useLoaderData } from "react-router-dom";
import { getClientes } from "../api/clientes";
import Cliente from "../components/Cliente";

export const loader = async () => {
  
  // Unas pruebillas
  // const resp = await fetch("https://app-node-heroku.herokuapp.com/api/movies");
  // const respData = await resp.json();
  // console.log(respData);

  const clientes = getClientes();

  return clientes;
}

const Home = () => {

  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900"> Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      {
        clientes.length ? (
          <table className="mt-5 w-full shadow-lg table-auto rounded-lg border-collapse ">
            <thead className="bg-blue-500 text-white font-semibold">
              <tr>
                <th className="p-2 rounded-tl-lg">Clientes</th>
                <th className="p-2">Contacto</th>
                <th className="p-2 rounded-tr-lg">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {
                clientes.map( cliente => (
                  <Cliente key={cliente.id} cliente={cliente}/>
                ))
              }
            </tbody>
          </table>
        ) : ( <p className="text-center mt-10">No hay clientes aún</p> )
      }

    </>
  )
}

export default Home
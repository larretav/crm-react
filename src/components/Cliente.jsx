import { useNavigate } from "react-router-dom";


const Cliente = ({cliente}) => {

  const navigate = useNavigate();
  const {nombre, empresa, email, telefono, id} = cliente;

  return (
    <tr className="border-b last:border-0">
      <td className="p-4 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td className="p-6">
        <p className="text-gray-600"> <span className="text-gray-800 font-bold">Email: </span> {email} </p>
        <p className="text-gray-600"> <span className="text-gray-800 font-bold">Tel: </span> {telefono} </p>
      </td>

      <td className="p-6 flex justify-center gap-4 ">
        <button 
          type="button"
          className="px-3 py-1 text-blue-500 font-semibold rounded-md hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out"
          onClick={() => navigate(`clientes/${id}/editar`) }
        >
          Editar</button>
        <button type="button" className="px-3 py-1 text-red-500 font-semibold rounded-md hover:bg-red-500 hover:text-white transition-all duration-200 ease-in-out">Eliminar</button>
      </td>
    </tr>
  )
}

export default Cliente
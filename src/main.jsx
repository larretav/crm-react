import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Layout from './components/Layout';
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente';
import Home, { loader as clientesLoader } from './pages/Home';
import ErrorPage from './components/ErrorPage';
import EditarCliente, { loader as editarClienteLoader } from './pages/EditarCliente';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      { 
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction
      },
      {
        path: 'clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        errorElement: <ErrorPage />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
)
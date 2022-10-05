
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="px-5 py-10 md:w-1/4 bg-blue-900">
        <h2 className="text-4xl font-semibold text-center text-white">CRM - Clientes</h2>

        <nav className="mt-10">
          <Link className={`${location.pathname === '/' ? 'bg-blue-400 bg-opacity-20' : 'text-white'} w-full my-3 py-2 px-2 rounded-md text-white text-2xl block hover:bg-blue-200 hover:bg-opacity-10 transition-all ease duration-200`} to="/" >Clientes</Link>
          <Link className={`${location.pathname === '/clientes/nuevo' ? 'bg-blue-400 bg-opacity-20' : 'text-white'} w-full my-3 py-2 px-2 rounded-md text-white text-2xl block hover:bg-blue-200 hover:bg-opacity-10 transition-all ease duration-200`} to="/clientes/nuevo" >Nuevo cliente</Link>
          
          {/* <NavLink 
            className={({isActive}) => isActive ? 'text-blue-300 text-2xl block mt-2' : 'text-white text-2xl block mt-2' } 
            to='/'
            end
          >
            Clientes
          </NavLink>

          <NavLink 
            className={({isActive}) => isActive ? 'text-blue-300 text-2xl block mt-2' : 'text-white text-2xl block mt-2' } 
            to='/clientes/nuevo'
          >
            Nuevo cliente
          </NavLink> */}
        </nav>
      </aside>

      <main className="p-10  md:w-3/4 md:h-screen overflow-scroll">
        <Outlet />
      </main>

    </div>
  )
}

export default Layout
import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {
    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/4 md:bg-gradient-to-b bg-purple-900 px-5 py-1">
                <h2 className="text-center text-4xl text-white font-bold mt-4">CRM - Clientes</h2>
                <nav className="mt-10">
                    <Link 
                        className={`${currentUrl === '/clients' ? 'text-purple-300': 'text-white'} text-white text-2xl block mt-2 hover:text-purple-300`}
                        to="/clients"
                    >Clientes</Link>
                    <Link 
                        className={`${currentUrl === '/clients/new' ? 'text-purple-300': 'text-white'} text-white text-2xl block mt-2 hover:text-purple-300`}
                        to="/clients/new">Nuevo Cliente</Link>
                </nav>
            </div>
            <div className="md:w-3/4">
                <Outlet />
            </div>

        </div>
    )
}

export default Layout
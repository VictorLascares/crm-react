import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {
    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-purple-900 px-5 py-1">
                <h1 className="text-center text-4xl text-white font-bold mt-4">CRM - Clientes</h1>
                <nav className="mt-10 pb-5 md:pb-0 flex md:flex-col justify-center md:items-start items-center gap-4">
                    <Link 
                        className={`${currentUrl === '/' ? 'text-purple-300': 'text-white'} text-white text-2xl mt-2 hover:text-purple-300 hover:cursor-pointer`}
                        to="/"
                    >Clientes</Link>
                    <Link 
                        className={`${currentUrl === '/clients/new' ? 'text-purple-300': 'text-white'} text-white text-2xl mt-2 hover:text-purple-300 hover:cursor-pointer`}
                        to="/clients/new">Nuevo Cliente</Link>
                </nav>
            </aside>
            <main className="md:w-3/4 py-10 px-5">
                <Outlet />
            </main> 
        </div>
    )
}

export default Layout
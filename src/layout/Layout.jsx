import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <div>Desde Layout.jsx</div>

            <Outlet />
        </div>
    )
}

export default Layout
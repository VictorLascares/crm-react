import { Outlet } from "react-router-dom"

const Login = () => {
    return (
        <div>
            <div>Desde Login.jsx</div>

            <Outlet />
        </div>
    )
}

export default Login
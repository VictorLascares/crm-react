import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './layout/Login'
import Layout from './layout/Layout'
import Index from './pages/Index'
import Form from './pages/Form'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}>
                    <Route index element={<Form />}/>
                </Route>

                <Route path='/clientes' element={<Layout />}>
                    <Route index element={<Index />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

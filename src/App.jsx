import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Index from './pages/Index'
import Create from './pages/Create'
import Edit from './pages/Edit'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/clients' element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path='new' element={<Create />} />
                    <Route path='edit/:id' element={<Edit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

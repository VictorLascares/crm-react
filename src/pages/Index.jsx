import { useEffect, useState } from "react"

const Index = () => {
    const [clients, setClients] = useState([])

    const getClients = async () => {
        try {
            const url = 'http://localhost:4000/clients';
            const response = await fetch(url);
            const result = await response.json();
            setClients(result);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getClients()
    }, [])
    


    return (
        <div>
            <h1>Inicio</h1>
        </div>
    )
}

export default Index
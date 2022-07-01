import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const Show = () => {
    const [client, setClient] = useState({})
    const [charging, setCharging] = useState(false)
    const params = useParams()

    const getClient = async () => {
        try {
            const url = `http://localhost:4000/clients/${params.id}`
            const response = await fetch(url);
            const result = await response.json();
            setClient(result)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        setCharging(!charging);
        getClient();
        setCharging(false);
    }, [])
    

    return (
        <div>
            {charging ? 'cargando...': (
                <>
                    <h1 className="text-4xl text-gray-700">
                        <span className="uppercase font-bold">Cliente: </span>
                        {client.name}
                    </h1>
                    <p className="mt-10 text-xl text-gray-500">Información del cliente</p>
                    <p className="text-xl text-gray-700 mt-4">
                        <span className="uppercase font-bold">Correo Eléctronico: </span>
                        {client.email}
                    </p>
                    {client.phone && (
                        <p className="text-xl text-gray-700 mt-4">
                            <span className="uppercase font-bold">Teléfono: </span>
                            {client.phone}
                        </p>
                    )}
                    <p className="text-xl text-gray-700 mt-4">
                        <span className="uppercase font-bold">Empresa: </span>
                        {client.business}
                    </p>
                    {client.notes && (
                        <p className="text-xl text-gray-700 mt-4">
                            <span className="uppercase font-bold">Notas: </span>
                            {client.notes}
                        </p>
                    )}
                </>
            )}
        </div>
    )
}

export default Show
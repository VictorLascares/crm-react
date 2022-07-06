import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import FormClient from '../components/FormClient'
import Spinner from "../components/Spinner";

const Edit = () => {
    const [client, setClient] = useState({})
    const [charging, setCharging] = useState(true)
    const {id} = useParams()
    useEffect(() => {
        const getClient = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const response = await fetch(url);
                const result = await response.json();
                setClient(result)
            } catch (error) {
                console.log(error);
            }
            setCharging(!charging);
        }
        getClient();  
    }, [])
    return (
        
            charging ? <Spinner /> : Object.keys(client).length === 0 ? <p className="flex justify-center items-center h-full text-4xl uppercase text-gray-700">No hay resultados</p> : (
                <>
                    <h1 className='font-black text-4xl text-purple-900'>Editar Cliente</h1>
                    <p className='mt-3 text-gray-500'>Llena los siguientes campos para editar a un cliente</p>
                    <FormClient 
                        client={client}
                    />
                </>
            )
    )
}

export default Edit
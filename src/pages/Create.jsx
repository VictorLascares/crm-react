import React from 'react'
import FormClient from '../components/FormClient'

const Create = () => {
    return (
        <>
            <h1 className='font-black text-4xl text-purple-900'>Nuevo Cliente</h1>
            <p className='mt-3 text-gray-500'>Llena los siguientes campos para registrar a un cliente</p>

            <FormClient />
        </>
    )
}

export default Create
import React from 'react'
import { Formik, Form, Field } from 'formik'

const FormClient = () => {
    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h2 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Clientes</h2>
            <Formik>
                <Form className='mt-10'>
                    <div className='md:grid md:grid-cols-2 md:gap-2'>
                        <Field id="name" type="text" className="focus:outline-none w-full p-3 bg-gray-50 border border-gray-400" placeholder="Nombre del cliente" />
                        <Field id="business" type="text" className="mt-2 md:mt-0 focus:outline-none w-full p-3 bg-gray-50 border border-gray-400" placeholder="Empresa del cliente" />   
                        <Field id="email" type="email" className="mt-2 md:mt-0 focus:outline-none w-full p-3 bg-gray-50 border border-gray-400" placeholder="example@correo.com" />   
                        <Field id="phone" type="tel" className="mt-2 md:mt-0 focus:outline-none w-full p-3 bg-gray-50 border border-gray-400" placeholder="Teléfono del cliente" />   
                    </div>
                    <Field as="textarea" id="notes" type="text" className="focus:outline-none mt-2 w-full p-3 bg-gray-50 border border-gray-400 resize-none h-40" placeholder="Notas del cliente" />
                    <input type="submit" value="Agregar Cliente" className='mt-5 w-full hover:cursor-pointer hover:bg-purple-600 bg-purple-900 p-3 text-white uppercase font-bold text-lg' />
                </Form>
            </Formik>
        </div>
    )
}

export default FormClient
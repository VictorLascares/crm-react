import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Error from './Error'

const FormClient = ({client}) => {
    const navigate = useNavigate();

    const newClientSchema = Yup.object().shape({
        name: Yup.string()
            .min(3,'El nombre es muy corto')
            .max(35, 'El nombre es muy largo')
            .required('El nombre  del cliente es obligatorio'),
        business: Yup.string()
            .required('El nombre de la empresa es obligatorio'),
        email: Yup.string()
            .email('Email no válido')
            .required('El email es obligatorio'),
        phone: Yup.number()
            .positive('Número no válido')
            .integer('Número no válido')
            .typeError('Número no válido'),
    })

    const handleSubmit = async (values) => {
        try {
            if (Object.keys(client).length > 0) {
                const url = `${import.meta.env.VITE_API_URL}/${client.id}`
                await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            } else {
                const url = import.meta.env.VITE_API_URL
                await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h2 className='text-gray-600 font-bold text-xl uppercase text-center'>{Object.keys(client).length > 0 ? 'Editar cliente': 'Agregar cliente'}</h2>
            <Formik
                initialValues={{
                    name: client?.name ?? '',
                    business: client?.business ?? '',
                    email: client?.email ?? '',
                    phone: client?.phone ?? '',
                    notes: client?.notes ?? ''
                }}
                enableReinitialize={true}
                onSubmit={ async(values, {resetForm}) => { 
                    await handleSubmit(values) 
                    // resetForm()
                    navigate('/clients')
                }}
                validationSchema={newClientSchema}
            >
                {({ errors , touched }) => {
                    return (
                        <Form className='mt-10' noValidate>
                            <div className='md:grid md:grid-cols-2 md:gap-2'>
                                <div>
                                    <Field id="name" type="text" name="name" className={`focus:outline-none w-full p-3 bg-gray-50 border ${errors.name && touched.name ? 'border-red-500' : 'border-gray-400'}`}placeholder="Nombre del cliente" />
                                    { errors.name && touched.name ? (<Error message={errors.name} />) : null}
                                </div>
                                <div className='mt-2 md:mt-0'>
                                    <Field id="business" name="business" type="text" className={`focus:outline-none w-full p-3 bg-gray-50 border ${errors.business && touched.business ? 'border-red-500' : 'border-gray-400'}`} placeholder="Empresa del cliente" />   
                                    { errors.business && touched.business ? (<Error message={errors.business} />) : null}
                                </div>
                                <div className='mt-2 md:mt-0'>
                                    <Field id="email" name="email" type="email" className={`focus:outline-none w-full p-3 bg-gray-50 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-400'}`} placeholder="example@correo.com" />
                                    { errors.email && touched.email ? (<Error message={errors.email} />) : null}   
                                </div>
                                <div className='mt-2 md:mt-0'>
                                    <Field id="phone" name="phone" type="tel" className={`focus:outline-none w-full p-3 bg-gray-50 border ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-400'}`} placeholder="Teléfono del cliente" />   
                                    { errors.phone && touched.phone ? (<Error message={errors.phone} />) : null}
                                </div>
                            </div>
                            <Field as="textarea" name="notes" id="notes" type="text" className="focus:outline-none mt-2 w-full p-3 bg-gray-50 border border-gray-400 resize-none h-40" placeholder="Notas del cliente" />
                            <input type="submit" value="Agregar Cliente" className='mt-5 w-full hover:cursor-pointer hover:bg-purple-600 bg-purple-900 p-3 text-white uppercase font-bold text-lg' />
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

FormClient.defaultProps = {
    client: {}
}

export default FormClient
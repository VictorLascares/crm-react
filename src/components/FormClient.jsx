import React from "react";
import { useNavigate, Form } from "react-router-dom";
import Error from "./Error";


const FormClient = ({ client }) => {
  const navigate = useNavigate();


  const handleSubmit = async (values) => {
    try {
      if (Object.keys(client).length > 0) {
        const url = `${import.meta.env.VITE_API_URL}/${client.id}`;
        await fetch(url, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        const url = import.meta.env.VITE_API_URL;
        await fetch(url, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h2 className="text-gray-600 font-bold text-xl uppercase text-center">
        {Object.keys(client).length > 0 ? "Editar cliente" : "Agregar cliente"}
      </h2>

      <Form method="post" className="mt-10" noValidate>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="nombre">
            Nombre:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 focus:outline-none"
            placeholder="Nombre del Cliente"
            name="name"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="empresa">
            Empresa:
          </label>
          <input
            id="business"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 focus:outline-none"
            placeholder="Empresa del Cliente"
            name="business"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="email">
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 block w-full p-3 bg-gray-50 focus:outline-none"
            placeholder="Correo Eléctronico del Cliente"
            name="email"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="telefono">
            Teléfono:
          </label>
          <input
            id="phone"
            type="tel"
            className="mt-2 block w-full p-3 bg-gray-50 focus:outline-none"
            placeholder="Teléfono del Cliente"
            name="phone"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="notas">
            Notas:
          </label>
          <textarea
            as="textarea"
            id="notes"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self focus:outline-none resize-none"
            placeholder="Notas del Cliente"
            name="notes"
          />
        </div>

        <input
          type="submit"
          className="mt-5 w-full bg-purple-800 hover:bg-purple-600 hover:cursor-pointer transition-all p-3 uppercase font-bold text-white text-lg"
          value={Object.keys(client).length > 0 ? "Actualizar cliente" : "Registrar cliente"}
        />
      </Form>
    </div>
  );
};

FormClient.defaultProps = {
  client: {},
};

export default FormClient;

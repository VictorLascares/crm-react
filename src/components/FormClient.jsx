import { Form } from "react-router-dom";

const FormClient = ({ client }) => {

  return (
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
          defaultValue={client?.name}
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
          defaultValue={client?.business}
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
          defaultValue={client?.email}
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
          defaultValue={client?.phone}
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
          defaultValue={client?.notes}
        />
      </div>

      <input
        type="submit"
        className="mt-5 w-full bg-purple-800 hover:bg-purple-600 hover:cursor-pointer transition-all p-3 uppercase font-bold text-white text-lg"
        value={
          Object.keys(client).length > 0
            ? "Actualizar cliente"
            : "Registrar cliente"
        }
      />
    </Form>
  );
};

FormClient.defaultProps = {
  client: {},
};

export default FormClient;

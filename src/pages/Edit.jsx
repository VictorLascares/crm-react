import { useActionData, useLoaderData, redirect } from "react-router-dom";
import { getClient, updateClient } from "../data/clients";
import FormClient from "../components/FormClient";
import Error from "../components/Error";

export async function loader({ params }) {
  const client = await getClient(params.id);
  if (Object.values(client).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "No hay resultados",
    });
  }
  return client;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const { email } = data;

  // Validacion
  const errors = [];
  if (Object.values(data).includes("")) {
    errors.push("Todos los campos son obligatorios");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errors.push("El correo no es válido");
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  // Actualizar el cliente
  await updateClient(params.id, data);

  return redirect("/");
}

const Edit = () => {
  const client = useLoaderData();
  const errors = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-purple-900">Editar Cliente</h1>
      <p className="mt-3 text-gray-500">
        Llena los siguientes campos para editar a un cliente
      </p>

      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <FormClient client={client} />
      </div>
    </>
  );
};

export default Edit;

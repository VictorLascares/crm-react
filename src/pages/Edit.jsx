import { useLoaderData } from "react-router-dom";
import { getClient } from "../data/clients";
import FormClient from "../components/FormClient";
import Spinner from "../components/Spinner";

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

const Edit = () => {
  const client = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-purple-900">Editar Cliente</h1>
      <p className="mt-3 text-gray-500">
        Llena los siguientes campos para editar a un cliente
      </p>
      <FormClient client={client} />
    </>
  );
};

export default Edit;
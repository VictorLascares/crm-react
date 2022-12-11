import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getClients } from "../data/clients";
import Client from "../components/Client";

export async function loader() {
  const clients = getClients();  
  return clients;
}

const Index = () => {
  const clients = useLoaderData();

  const handleEliminar = async (id) => {
    const confirmed = confirm("¿Desea eliminar el cliente?");
    if (confirmed) {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        await fetch(url, {
          method: "DELETE",
        });
        const clientsArray = clients.filter((client) => client.id !== id);
        setClients(clientsArray);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h1 className="font-black text-4xl text-purple-900">Clientes</h1>
      <p className="mt-3 text-gray-500">Administra tus clientes</p>

      <div className="overflow-x-auto">
        <table className="w-full mt-5 table-auto shadow bg-white">
          <thead className="bg-purple-900 text-white">
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Empresa</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <Client
                last={index === clients.length - 1}
                key={client.id}
                client={client}
                handleEliminar={handleEliminar}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Index;

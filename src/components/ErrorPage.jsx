import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold mt-20 text-purple-800">
        CRM - Clientes
      </h1>
      <p className="text-center text-2xl text-red-500 uppercase font-bold">
        Ocurrio un error
      </p>
      <p className="text-center text-red-500">
        {error.statusText || error.message}
      </p>
    </div>
  );
}

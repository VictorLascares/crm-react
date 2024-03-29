import { useNavigate, Form, redirect } from "react-router-dom";
import { removeClient } from "../data/clients";

export async function action({params}) {
  await removeClient(params.id);
  return redirect("/");
}

const Client = ({ client, last }) => {
  const { name, email, business, phone, notes, id } = client;
  const navigate = useNavigate();
  return (
    <tr
      className={`${!last ? "border-b border-gray-400" : ""} hover:bg-gray-50`}
    >
      <td className="p-3">{name}</td>
      <td className="p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {phone}
        </p>
      </td>
      <td className="p-3">{business}</td>
      <td className="p-3">
        <div className="flex justify-center items-center gap-2">
          <button
            type="button"
            className="p-2 rounded-md bg-blue-600 hover:bg-blue-900 text-white"
            onClick={() => navigate(`/clients/edit/${id}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>

          <Form
            method="post" 
            action={`/clients/${id}`}
            onSubmit={(e) => {
              if(!confirm("¿Deseas eliminar este registro?")) {
                e.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="p-2 rounded-md bg-red-600 hover:bg-red-900 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </Form>
        </div>
      </td>
    </tr>
  );
};

export default Client;

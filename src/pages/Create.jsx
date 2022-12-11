import { useActionData } from "react-router-dom";
import FormClient from "../components/FormClient";
import Error from "../components/Error";

export async function action({ request }) {
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
}

const Create = () => {
  const errors = useActionData();

  console.log(errors);
  return (
    <>
      <h1 className="font-black text-4xl text-purple-900">Nuevo Cliente</h1>
      <p className="mt-3 text-gray-500">
        Llena los siguientes campos para registrar a un cliente
      </p>

      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <h2 className="text-gray-600 font-bold text-xl uppercase text-center">
          {/* {Object.keys(client).length > 0
            ? "Editar cliente"
            : "Agregar cliente"} */}
        </h2>
        <FormClient />
      </div>
    </>
  );
};

export default Create;

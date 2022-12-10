import FormClient from "../components/FormClient";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
}

const Create = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-purple-900">Nuevo Cliente</h1>
      <p className="mt-3 text-gray-500">
        Llena los siguientes campos para registrar a un cliente
      </p>

      <FormClient />
    </>
  );
};

export default Create;

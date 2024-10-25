import { sendCorreo } from "@/pages/api/correo";
import { useState } from 'react';

export default function Sendcorreo() {
  const [nombreCorrero, setNombreCorrero] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nombreCorrero) {
      setResponseMessage('Por favor, introduce un correo.');
      return;
    }

    try {
      console.log("El nombre es:", nombreCorrero); // Esto debería imprimir el correo
      const result = await sendCorreo(nombreCorrero);
      setResponseMessage(result.message || 'Correo registrado con éxito');
    } catch (error) {
      console.error(error);
      setResponseMessage('Error al registrar el correo.');
    }
  };

  return (
    <div className="bg-[#011828]" id="conocenos">
      <div className="container px-4 py-56 mx-auto lg:flex lg:items-center lg:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white xl:text-3xl">
          No te pierdas el lanzamiento de JuegaYa
        </h2>

        <div className="mt-8 lg:mt-0">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
            <form onSubmit={handleSubmit}>
              <input
                name="nombreCorrero"
                type="text"
                placeholder="Escribe tu correo o número"
                value={nombreCorrero} // Vinculamos el valor aquí
                onChange={(e) => setNombreCorrero(e.target.value)} // Actualizamos el estado en el cambio
                className="px-4 py-2 text-white bg-[#013A63] border border-gray-200 rounded-lg sm:mx-2 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <button 
                type="submit"
                className="mt-4 px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#00C2FF] rounded-lg sm:mx-2 hover:bg-[#00A8E8] focus:ring focus:ring-blue-300 focus:ring-opacity-80 focus:outline-none">
                Quiero ser el primero en probar
              </button>
            </form>
            {responseMessage && (
              <p className="mt-4 text-white ">{responseMessage}</p>
            )}
          </div>

          <p className="mt-3 text-sm text-gray-300">
            Descubre cómo reservar canchas de fútbol, vóley, basketball, pádel y tenis sin complicaciones.
          </p>
        </div> 
      </div>
    </div>
  );
}

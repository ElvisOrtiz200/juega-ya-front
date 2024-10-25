import axios from 'axios';

export const sendCorreo = async (nombreCorrero) => {
  try {
    console.log("el nombre es: "+nombreCorrero); // Verifica que el valor sea correcto
    const response = await axios.post('https://juegaya-app.onrender.com/api/correo', {
      nombre_correro: nombreCorrero,
    });
    console.log("Respuesta de la API:", response.data); // Muestra la respuesta de la API
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud:', error.response ? error.response.data : error.message); // Muestra el error detallado
    throw new Error('Error al enviar el correo');
  }
};

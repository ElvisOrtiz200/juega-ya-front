import axios from 'axios';

export const sendSolicitud= async (nombreSolicitud) => {
  try {
    console.log("el nombre es: "+nombreSolicitud); // Verifica que el valor sea correcto
    const response = await axios.post('https://juegaya-app.onrender.com/api/solicitud', {
      nombre_solicitud: nombreSolicitud,
    });
    console.log("Respuesta de la API:", response.data); // Muestra la respuesta de la API
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud:', error.response ? error.response.data : error.message); // Muestra el error detallado
    throw new Error('Error al enviar el correo');
  }
};
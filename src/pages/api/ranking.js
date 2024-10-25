import axios from 'axios';

export const fetchRanking = async () => {
    try {
        const response = await axios.get('https://juegaya-app.onrender.com/api/ranking'); // URL de tu API
        return response.data; // Devuelve los datos del ranking
    } catch (error) {
        console.error('Error al obtener el ranking:', error);
        throw new Error('Error al obtener el ranking'); // Manejo de errores
    }
};
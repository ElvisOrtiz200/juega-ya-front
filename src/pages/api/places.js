import axios from 'axios';

export default async function handler(req, res) {
    const { input } = req.query; // Obtener el input desde la query

    if (!input) {
        return res.status(400).json({ error: 'Input is required' });
    }

    const apiKey = 'AIzaSyBT6rFvcWhB3JPWHlkWEhqkG7DFGoXj4go'; // Tu API Key
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&components=country:PE&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        res.status(200).json(response.data); // Retornar la respuesta de la API de Google
    } catch (error) {
        console.error('Error fetching places from Google:', error);
        res.status(500).json({ error: 'Error fetching places' });
    }
} 
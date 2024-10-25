import { useState, useEffect } from 'react';
import { sendSolicitud } from '@/pages/api/solicitud';
import { fetchRanking } from '@/pages/api/ranking';
import axios from 'axios';

export default function Autocomplete() {
    const [nombreSolicitud, setNombreSolicitud] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [rankings, setRankings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]); // Resultados del autocompletado
    const [topPlaces, setTopPlaces] = useState([]);
    const [timeRemaining, setTimeRemaining] = useState(0);
    
    useEffect(() => {
        const getRankings = async () => {
            try {
                const data = await fetchRanking(); 
                setRankings(data); 
            } catch (error) {
                console.error('Error al obtener los rankings:', error);
            } finally {
                setLoading(false); 
            }
        };

        getRankings();
    }, []);

    // Función para buscar lugares
    const fetchPlaces = async (query) => {
        if (!query) {
            setResults([]); // Limpia resultados si no hay consulta
            return; // Si no hay consulta, no hacer nada
        }

        try {
            const response = await axios.get(`/api/places?input=${query}`);
            console.log('Fetched Places:', response.data); // Verifica los datos
            if (response.data && response.data.predictions) {
                setResults(response.data.predictions); // Asegúrate de que predictions existan
            } else {
                setResults([]); // Limpia resultados si no hay predicciones
            }
        } catch (error) {
            console.error('Error fetching places:', error);
            setResults([]); // Limpia resultados en caso de error
        }
    };

    // Debounce: retrasar la búsqueda
    useEffect(() => {
        const handler = setTimeout(() => {
            fetchPlaces(nombreSolicitud); 
        }, 500);

        return () => {
            clearTimeout(handler); 
        };
    }, [nombreSolicitud]);

    // Maneja la selección de una opción
    const handleSelect = (description) => {
        setNombreSolicitud(description); 
        setResults([]); 
    };

    // Maneja el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!nombreSolicitud) {
            setResponseMessage('Por favor, introduce una cancha.');
            return;
        }

        try {
            console.log("El nombre es:", nombreSolicitud); 
            const result = await sendSolicitud(nombreSolicitud);
            setResponseMessage(result.message || 'Cancha registrada con éxito');
            
            setTopPlaces((prev) => [...prev, { name: nombreSolicitud, votes: 1 }]);
            setNombreSolicitud(''); 
            setResults([]); 
        } catch (error) {
            console.error(error);
            setResponseMessage('Error al registrar la cancha.');
        }
    };

    // Función para calcular el tiempo restante hasta la próxima actualización
    const calculateTimeRemaining = () => {
        const now = new Date();
        const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0);
        const remaining = nextHour - now; 
        setTimeRemaining(Math.floor(remaining / 1000)); 
    };

    useEffect(() => {
        calculateTimeRemaining(); 

        const intervalId = setInterval(() => {
            calculateTimeRemaining(); 
        }, 1000);

        return () => clearInterval(intervalId); 
    }, []);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className="bg-[#011828] flex items-center justify-center min-h-screen flex-col py-7 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-8">
                <h1 className="text-2xl text-[#011828] font-bold mb-4 text-center">¡Dinos tu cancha favorita!</h1>
                <p className="text-gray-700 mb-4 text-center">
                    Tu opinión importa. Ayúdanos a incluir las mejores canchas para que siempre encuentres un lugar disponible cerca de ti. 
                    Al mencionar tu cancha favorita, podríamos incluirla en la plataforma.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-4">
                        <input
                            type="text"
                            name='nombreSolicitud'
                            value={nombreSolicitud}
                            onChange={(e) => setNombreSolicitud(e.target.value)} 
                            placeholder="Escribe un lugar"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        {results.length > 0 && (
                            <ul className="absolute z-50 w-full max-h-72 bg-white border border-gray-200 rounded-lg overflow-y-auto mt-1">
                                {results.map((place, index) => (
                                    <li 
                                        key={index} 
                                        onClick={() => handleSelect(place.description)} 
                                        className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                                    >
                                        {place.description}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-500 transition"
                    >
                        Quiero ver mi cancha en JuegaYa
                    </button>
                </form>
                {responseMessage && <p className="mt-4 text-red-500">{responseMessage}</p>}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl text-[#011828] font-bold mb-4 text-center">Ranking de las Canchas Más Votadas</h2>
                <p className="text-gray-700 mb-4 text-center">El ranking se actualizará en {formatTime(timeRemaining)}.</p>
                <table className="w-full border border-gray-300 mt-2">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2 text-left text-black">N°</th>
                            <th className="border border-gray-300 p-2 text-left text-black">Nombre de la Cancha</th>
                        </tr>
                    </thead>
                    <tbody>
                    {loading ? (
                        <tr>
                            <td className="border border-gray-300 p-2 text-center" colSpan="3">Cargando...</td>
                        </tr>
                    ) : rankings.length > 0 ? (
                        rankings.map((ranking, index) => (
                            <tr key={ranking.id_ranking}>
                                <td className="border border-gray-300 p-2 text-black">{index + 1}</td>
                                <td className="border border-gray-300 p-2 text-black">{ranking.nombre_ranking}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className="border border-gray-300 p-2 text-center" colSpan="3">No hay rankings disponibles.</td>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
        </div>
    );
}

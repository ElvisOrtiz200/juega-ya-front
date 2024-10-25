export default function Meet(){
    return (
        <section className="bg-[#011828] py-20 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-[#011828] opacity-50 z-0"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
    <h2 className="text-center text-4xl lg:text-5xl font-extrabold text-white mb-12 opacity-0 animate-fadeInUp">
      Conócenos
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 opacity-0 animate-slideIn delay-100">
      <div className="flex flex-col items-center justify-center">
       
        <p className="text-lg text-center leading-relaxed text-gray-200">
          Facilitar el acceso a las mejores canchas deportivas de tu ciudad, ofreciendo una plataforma rápida y sencilla para reservar espacios donde puedas disfrutar de tu deporte favorito.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
       
        <p className="text-lg text-center leading-relaxed text-gray-200">
          Nos vemos como el principal aliado para deportistas y propietarios de canchas en toda la región, conectando a miles de jugadores con espacios de calidad.
        </p>
      </div>
    </div>

    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 animate-slideIn delay-200">
      <div className="flex flex-col items-center bg-[#002d57] p-8 rounded-lg transform transition-transform duration-500 hover:scale-105">
        <div className="text-3xl text-blue-400 mb-4">⚽</div>
        <h4 className="text-2xl font-bold text-blue-400 mb-2">Variedad de Deportes</h4>
        <p className="text-lg text-gray-200 text-center">
          Reserva canchas de fútbol, tenis, pádel, basketball y vóley en un solo lugar.
        </p>
      </div>

      <div className="flex flex-col items-center bg-[#002d57] p-8 rounded-lg transform transition-transform duration-500 hover:scale-105">
        <div className="text-3xl text-blue-400 mb-4">⏳</div>
        <h4 className="text-2xl font-bold text-blue-400 mb-2">Reservas en Tiempo Real</h4>
        <p className="text-lg text-gray-200 text-center">
          Disponibilidad instantánea de canchas, asegurando que siempre encuentres un lugar para jugar.
        </p>
      </div>

      <div className="flex flex-col items-center bg-[#002d57] p-8 rounded-lg transform transition-transform duration-500 hover:scale-105">
        <div className="text-3xl text-blue-400 mb-4">🔄</div>
        <h4 className="text-2xl font-bold text-blue-400 mb-2">Fácil de Usar</h4>
        <p className="text-lg text-gray-200 text-center">
          Proceso de reserva rápido y sencillo en solo 4 pasos.
        </p>
      </div>

      <div className="flex flex-col items-center bg-[#002d57] p-8 rounded-lg transform transition-transform duration-500 hover:scale-105">
        <div className="text-3xl text-blue-400 mb-4">💳</div>
        <h4 className="text-2xl font-bold text-blue-400 mb-2">Pagos Seguros</h4>
        <p className="text-lg text-gray-200 text-center">
          Pagos seguros con diversas opciones de pago, para que puedas reservar con confianza.
        </p>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .animate-fadeInUp {
      animation: fadeInUp 3s ease-out forwards;
    }

    .animate-slideIn {
      animation: slideIn 3s ease-out forwards;
    }

    .animate-pulse {
      animation: pulse 3s infinite;
    }

    .delay-100 {
      animation-delay: 1s;
    }

    .delay-200 {
      animation-delay: 1s;
    }
  `}</style>
</section>

    );
}
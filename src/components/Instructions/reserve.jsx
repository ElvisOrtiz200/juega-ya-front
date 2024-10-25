"use client";
import { useState } from "react";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";

export default function App() {
  const [hovered, setHovered] = useState(null);

  const cards = [
    {
      title: "PASO 1",
      subtitle: " Selecciona tu Cancha Favorita",
      descripcion: "Explora nuestra amplia selección de canchas disponibles para diferentes deportes. Desde fútbol hasta tenis, cada cancha cuenta con imágenes y descripciones detalladas que te ayudarán a elegir la mejor opción para tu próximo juego.",
      image: "/img/step1.png",
  
    },
    {
      title: "PASO 2",
      subtitle: "Elige la Fecha y Hora",
      descripcion: "Utiliza nuestro calendario interactivo para seleccionar la fecha y la hora en la que deseas reservar tu cancha. Podrás ver la disponibilidad en tiempo real, asegurándote de que puedes jugar en el momento que prefieras.",
      image: "/img/step2.png",
      
      // image: "https://www.geovictoria.com/hubfs/Imported_Blog_Media/portada-formato-horarios-de-trabajo-100-1024x576-3.jpg",
    
    },
    {
      title: "PASO 3",
      subtitle: "Confirma los Detalles de tu Reserva",
      descripcion: "Antes de finalizar, revisa los detalles de tu reserva: la cancha seleccionada, la fecha y la hora. Si necesitas realizar algún cambio, este es el momento perfecto para ajustarlo.",
      image: "/img/step3.png",
      
      // image: "https://img.lpderecho.pe/wp-content/uploads/2021/02/banner-STC-04386-2017-PA-correo-electronico-secreto-LP-e1625015385523.png",
     
    },
    {
      title: "PASO 4",
      subtitle: "Realiza tu Pago y Confirma la Reserva",
      descripcion: "Elige tu método de pago preferido y completa el proceso. Una vez que tu pago se haya procesado, recibirás un correo electrónico de confirmación con todos los detalles de tu reserva. ¡Es así de fácil!",
      image: "/img/step4.png",
      
      // image: "https://ecdisis.com/wp-content/uploads/2020/09/imagen-medios-de-pago-def.jpeg",
 
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative py-8">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://www.clarin.com/2018/04/02/rJOJfPbof_1256x620__1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.19,
        }}
      ></div>
      {/* Título */}
      <div className="text-[20px] lg:text-[37px] xl:text-[52px] text-white text-center font-extrabold mb-8">
        ¿Cómo reservar en JuegaYa?
      </div>

      {/* Contenedor de los cards */}
      <div className="w-full flex items-center justify-center px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] w-full relative z-10">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 h-[500px] md:h-[450px] lg:h-[400px] xl:h-[500px] ${
                hovered === index ? "scale-105" : "scale-100"
              }`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{ zIndex: hovered === index ? 10 : 1 }} // Aumentar el z-index del card en hover
            >
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-2xl text-white/60 uppercase font-bold">
                  {card.title}
                </p>
                <h4 className="text-xl text-white font-bold">{card.subtitle}</h4>
              </CardHeader>
              <Image
                alt="Card background"
                className="z-0 h-full w-full object-cover brightness-50"
                src={card.image}
                width =  {1280} // Añadir dimensiones
                height = {689}
              />
              {hovered === index && (
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 w-full p-4 flex justify-between">
                  <div className="text-white">
                    <p className="text-justify">{card.descripcion}</p>
                  </div>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

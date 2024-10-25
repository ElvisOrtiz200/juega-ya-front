"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hola() {
  const comments = [
    {
      id: 1,
      text: "¡Me encanta la idea de poder reservar canchas de fútbol desde mi móvil! Sería genial tener una app que me notifique cuando haya cancelaciones.",
      name: "John Pérez",
    },
    {
      id: 2,
      text: "Busco una plataforma que me permita reservar canchas para mi equipo de fútbol y gestionar los pagos de forma sencilla, y que esté disponible 24/7.",
      name: "Julio Nureña",
    },
    {
      id: 3,
      text: "Considero que es fundamental que la plataforma tenga un sistema de reseñas, para conocer las opiniones de otros usuarios sobre cada cancha.",
      name: "Jennifer Castillo",
    },
  ];

  const [currentComment, setCurrentComment] = useState(0);

  // Desplazamiento automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentComment((prevComment) =>
        prevComment === comments.length - 1 ? 0 : prevComment + 1
      );
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [comments.length]);

  // Funciones para manejar el clic manual en los botones
  const handleNext = () => {
    setCurrentComment((prevComment) =>
      prevComment === comments.length - 1 ? 0 : prevComment + 1
    );
  };

  const handlePrev = () => {
    setCurrentComment((prevComment) =>
      prevComment === 0 ? comments.length - 1 : prevComment - 1
    );
  };

  return (
    <section className="bg-[#011828] text-white mt-14">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-bold text-center capitalize lg:text-4xl">
          Lo Que Dicen Nuestros Usuarios
        </h1>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="flex items-start max-w-6xl mx-auto mt-16">
          <button
            title="left arrow"
            onClick={handlePrev}
            className="hidden p-2 transition-colors duration-300 border rounded-full rtl:-scale-x-100 lg:block hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="text-center transition-transform duration-300 transform hover:scale-105">
            <p className="text-lg italic lg:mx-8">
              {comments[currentComment].text}
            </p>

            <div className="flex flex-col items-center justify-center mt-8">
              <div className="mt-4 text-center">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  {comments[currentComment].name}
                </h1>
              </div>
            </div>
          </div>

          <button
            title="right arrow"
            onClick={handleNext}
            className="hidden p-2 text-blue-500 transition-colors duration-300 border rounded-full rtl:-scale-x-100 lg:block hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

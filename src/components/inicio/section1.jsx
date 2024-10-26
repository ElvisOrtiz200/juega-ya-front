// src/components/Section1.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const images = [
  'https://media1.tenor.com/m/_J3KJUFR7oYAAAAd/messi-celebrate.gif',
  'https://media1.tenor.com/m/YZS5zdHQMhAAAAAC/gif.gif',
  'https://media1.tenor.com/m/Y2hJLZ4bwSYAAAAd/messi-nutmeg.gif'
];

const Section1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const handleImageClick = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setTransition(false);
    }, 500); // Duration of the transition
  };

  return (
    <div className="relative h-auto bg-[#011828] overflow-hidden lg:px-24 lg:py-28 xl:px-24 xl:py-28 px-5 py-10 ">
      
        <div className='text-[20px] lg:text-[37px] xl:text-[52px] text-white text-center font-extrabold'>Reserva tu cancha favorita en segundos y empieza a jugar ya.</div>
        <div className='text-[8px] lg:text-[15px] xl:text-[22px] text-white italic text-center pt-8'>Ya no necesitas llamar para preguntar. ¡Reserva en línea fácilmente y aprovecha cada minuto en la cancha!</div>
        <div className="container mx-auto p-4 text-center mt-9">
           
            <Link href="/dataCollect">
                <button className="bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-500 transition">
                    Comentar mi Cancha Favorita
                </button>
            </Link>
        </div>

    </div>
  );
};

export default Section1;

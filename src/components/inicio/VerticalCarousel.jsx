"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "../../app/VerticalCarouselStyle.css"; // CSS global

export default function VerticalCarousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleSlideChange = (swiper) => {
      const slides = swiper.slides;
      slides.forEach((slide, index) => {
        slide.classList.remove("animate--grow", "animate--shrink");
        if (index === swiper.activeIndex) {
          slide.classList.add("animate--grow");
        } else {
          slide.classList.add("animate--shrink");
        }
      });
    }; 

    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () =>
        handleSlideChange(swiperRef.current)
      );
    }
  }, []);

  const data = [
    { title: "Consulta y Reserva de Canchas Simplificada", description: "Consulta disponibilidad y características de canchas\nsin necesidad de llamadas. ¡Disfruta ya!", imgSrc: "/img/____4.png" },
    { title: "Creación de Equipos", description: "Forma tu equipo ideal\n¡Compite y haz nuevos amigos en la cancha!", imgSrc: "/img/___3.png" },
    { title: "Grabación de Jugadas", description: "Graba tus mejores jugadas\nRevive y comparte tus momentos épicos.", imgSrc: "/img/___2.png" },
    { title: "Sistema de Recompensas", description: "Gana puntos por cada actividad\nCuanto más juegas, más recompensas obtienes.", imgSrc: "/img/___1.png" },
    { title: "Gestión Eficiente para Propietarios", description: "Optimiza el uso de tus canchas\nLleva el control sin esfuerzo.", imgSrc: "/img/___6.png" },
  ];

  return (
    <Swiper
    modules={[Navigation, Autoplay]}
    navigation  
      direction="vertical"
      pagination={{ clickable: true }}
      loop={true}
      speed={1000}
      autoplay={{ delay: 2000 }} 
      slidesPerView={1}
      spaceBetween={1}
      centeredSlides={true}
      grabCursor={true}
      className="mySwiper"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
  
      {data.map((item, idx) => (
        <SwiperSlide key={idx}>
    <div className="slide-content">
      <Image
        src={item.imgSrc}
        alt={item.title}
        width={120}
        height={120}
        className="responsive-img"
      />
      <div className="overlay"></div> {/* Agregar el overlay aquí */}
      <div className="text-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  </SwiperSlide>
      ))}
    </Swiper>
  );
}

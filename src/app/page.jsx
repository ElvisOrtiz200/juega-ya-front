"use client"

import Pie from "../components/Footer/footer";
import Hola from "../components/Comentarios/comments";
import Nav from "../components/inicio/nav";
import Section1 from "../components/inicio/section1";
import Features from "../components/inicio/VerticalCarousel"
import TitleCarrusel from "../components/Comentarios/carruselTittle";
import Reserve from "@/components/Instructions/reserve";
import Sendcorreo from "../components/email/correo";

export default function Home() {
  return (
   <>
  <Nav />
  <Section1/>
  <TitleCarrusel/>
  <Features></Features>
  <Hola/>
  <Sendcorreo/>
  <Reserve/>
  <Pie/>
   </>
  );
}

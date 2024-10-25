"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#011828] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src="/img/logo-sin-fondo.png"
                alt="Logo"
                width={160} // Ajusta el ancho de la imagen
                height={40} // Ajusta la altura de la imagen
                className="h-24 w-auto" // Ajusta el tamaño de la imagen según necesites
              />
            </Link>
          </div>
          <div className="flex-1 hidden md:flex justify-center">
            <div className="flex-1 flex justify-center">
              <div className=" flex items-center justify-center space-x-24 h-full">
                <Link
                  href="/"
                  className="py-2 rounded-md text-sm font-medium"
                >
                  INICIO
                </Link>
                <Link 
                  href="/dataCollect"
                  className="px-3 py-2 rounded-md text-sm font-medium text-center"
                >
                  <span>RESERVAR</span>
                
                </Link>
                <Link
                  href="/conoce"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  CONOCENOS
                </Link>
              </div>
            </div>
            <Link
              href='/#conocenos'
              className="bg-[#006749] ml-auto px-3 py-2 text-sm font-medium mt-2 rounded-lg  text-center"
            >
              <u>Iniciar Sesión</u>  <br /> Registrarse
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-purple-600 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="hover:bg-purple-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/dataCollect"
              className="hover:bg-purple-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Reservar
            </Link>
            <Link
              href="/conoce"
              className="hover:bg-purple-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Conocenos
            </Link>
            <Link
              href="/#conocenos"
              className="hover:bg-purple-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              <u>Registrarse</u>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

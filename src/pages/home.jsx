import { Link } from 'react-router-dom';
import React, {useEffect, useState } from 'react';
import Footer from "../components/footer";
import Nav from '../components/Nav';

export default function Home() {
  const marcas = [
    {
      nombre: "NIKE",
      texto: "Innovación y tecnología, en calzado y ropa deportiva",
      img: "imagenes/Logo_NIKE.svg",
      link: "/nike",
    },
    {
      nombre: "ADIDAS",
      texto: "Diseño funcional y estilo urbano combinado con rendimiento deportivo",
      img: "imagenes/Adidas_logo.png",
      link: "/adidas",
    },
    {
      nombre: "REEBOK",
      texto: "Enfocada en el mundo fitness, el entretenimiento y el estilo retro",
      img: "imagenes/reebok.png",
      link: "/reebok",
    },
    {
      nombre: "PUMA",
      texto: "Combina deporte con moda y estilo de vida",
      img: "imagenes/Puma-Logo.png",
      link: "/puma",
    },
  ];

 

  return (
    <div className="bg-white/80  flex flex-col min-h-screen">
  
      
      {/* HERO */}
      <header className="text-center text-black py-6 px-4 bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Bienvenidos a H&amp;L Sports</h1>
        <p className="text-base sm:text-lg">
          Tu tienda online de ropa deportiva confiable y con estilo
        </p>
      </header>
     {/* NAVBAR */}
      <Nav />

      {/* MARCAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10 px-4">
        {marcas.map((marca, index) => (
          <div
            key={index}
            className="bg-gray-300 p-4 pb-20 rounded-lg shadow-md transition-transform hover:scale-105"
          >
            <Link to={marca.link} className="no-underline text-black block text-center">
              <img
                src={marca.img}
                alt={marca.nombre}
                className="w-full max-w-[180px] h-auto mx-auto mb-2"
              />
              <h2 className="text-xl font-bold">{marca.nombre}</h2>
              <p className="text-sm">{marca.texto}</p>
            </Link>
            
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}



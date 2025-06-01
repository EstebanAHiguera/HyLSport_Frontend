import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-black  px-6 pt-10 pb-20 mt-20 ">
      <p className="text-center text-white text-sm sm:text-base">
        Visítanos también en nuestras redes sociales
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 mt-2">
        <Link to="#" className="text-white flex items-center">
          <img
            src="/imagenes/facebook-icon-free-png.webp"
            alt="Facebook"
            className="w-5 mr-1"
          />
          <span className="text-sm sm:text-base">H&L Sports</span>
        </Link>
        <Link to="#" className="text-white flex items-center">
          <img
            src="/imagenes/instagram-logo-png.webp"
            alt="Instagram"
            className="w-5 mr-1"
          />
          <span className="text-sm sm:text-base">h&Sports26</span>
            </Link>
          
      </div>
    </footer>
  );
}

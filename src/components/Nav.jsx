import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import SidebarUsuario from "./SidebarUsuario"; // al inicio

export default function Header() {
  const location = useLocation();
  const rutaActual = location.pathname;

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const datosUsuario = localStorage.getItem("usuario");
    if (datosUsuario) {
      setUsuario(JSON.parse(datosUsuario));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    setUsuario(null);
    window.location.href = "/";
  };

  return (
   
      <nav className="flex items-center justify- bg-black text-white px-6 py-4 p-10">
      
          {/* Izquierda: Nombre de usuario */}
      <div className="flex items-center w-1/4">
        {usuario && (
            <li>
            
           <SidebarUsuario usuario={usuario} onLogout={handleLogout} />  
            </li>
          )}
           {!usuario && rutaActual !== "/login" && (
            <li>
              <Link to="/login" className="text-white text-base sm:text-lg hover:text-indigo-700 transition">
                Iniciar sesión
              </Link>
            </li>
          )}
                 
      </div>

           {/* Centro: Menú */}
      <ul className="flex space-x-8 justify-center flex-grow">

          <li>
         {rutaActual !== "/" && (
            <Link
              to="/"
              className={`text-base sm:text-lg transition ${
                rutaActual === "/" ? "text-indigo-500 underline" : "text-white hover:text-indigo-700"
              }`}
            >
              Inicio
            </Link>
            )}
          </li>

          {rutaActual !== "/dashboard" && (
            <li>
              <Link to="/dashboard" className="text-white text-base sm:text-lg hover:text-indigo-700 transition">
                Dashboard
              </Link>
            </li>
          )}

          {rutaActual !== "/Contacto" && (
            <li>
              <Link to="/Contacto" className="text-white text-base sm:text-lg hover:text-indigo-700 transition">
                Nosotros
              </Link>
            </li>
          )}

          {rutaActual !== "/nike" && (
            <li>
              <Link to="/nike" className="text-white text-base sm:text-lg hover:text-indigo-700 transition">
                Nike
              </Link>
            </li>
          )}

          {rutaActual !== "/adidas" && (
            <li>
              <Link to="/adidas" className="text-white text-base sm:text-lg hover:text-indigo-700 transition">
                Adidas
              </Link>
            </li>
          )}

          {rutaActual !== "/reebok" && (
            <li>
              <Link to="/reebok" className="text-white text-base sm:text-lg hover:text-indigo-700 transition">
                Reebok
              </Link>
            </li>
          )}

          {rutaActual !== "/puma" && (
            <li>
              <Link to="/puma" className="text-white text-base sm:text-lg hover:text-indigo-700 transition">
                Puma
              </Link>
            </li>
          )}

            
        </ul>
          {/* Derecha: Carrito */}
      <div className="w-1/4 flex justify-end relative">
        <Link to="/cart" className="relative text-white hover:text-indigo-400 transition">
          <Icon icon="heroicons:shopping-cart" width="32" height="32" />
              
        </Link>
      </div>

      </nav>
  
  );
}

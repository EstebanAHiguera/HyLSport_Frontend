// components/SidebarUsuario.jsx
import { useState } from 'react';
import { Icon } from '@iconify/react';


export default function SidebarUsuario({ usuario, onLogout }) {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  
  return (
    <>
      {/* Botón en Navbar */}
      <button onClick={toggleSidebar} className="text-white hover:text-indigo-500 transition">
        {usuario?.nombre}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-200  text-black shadow-lg z-50 transform transition-transform duration-300 ${
          visible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-gray-300 flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Perfil</h2>
          <button onClick={toggleSidebar}>
            <Icon icon="line-md:close" width="24" />
          </button>
        </div>

        <div className="p-4 space-y-4 bg-gray-200">
          <div className="flex flex-col items-center">
            <img
              src={usuario.foto || "https://via.placeholder.com/100"}
              alt="Foto de perfil"
              className="w-24 h-24  bg-white rounded-full object-cover"
            />
            <h3 className="mt-2 font-semibold text-lg">{usuario.nombre}</h3>
          </div>

          <div className="space-y-2">
        
            <p><strong>Celular:</strong> {usuario.phone || "No registrado"}</p>

            <p><strong>Correo:</strong> {usuario.correo || "No registrado"}</p>
          </div>

          <button
            onClick={() => {
              toggleSidebar();
              onLogout();
            }}
            className="bg-red-500 w-full text-white p-2 rounded hover:bg-red-600 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
}

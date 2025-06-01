import React from "react";
import { useCart } from "./CartContext";

export default function ProductoModal({ producto, onClose, onAgregar }) {
  if (!producto) return null;
  const { actualizarCantidad } = useCart();
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative text-black">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-48 object-contain mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{producto.nombre}</h2>
        <p className="mb-1">
          <strong>Descripción:</strong> {producto.descripcion || "Sin descripción"}
        </p>
       
        <p className="mb-4">
          <strong>Precio:</strong> ${producto.precio}
        </p>
        <button
          onClick={() => {
            onAgregar(producto);
            onClose();
          }}
          className="w-full bg-indigo-600 text-white py-2 mt-5 rounded-lg hover:scale-105 transition"
        >
          Agregar al carrito
        </button>
               
      </div>
    </div>
  );
}

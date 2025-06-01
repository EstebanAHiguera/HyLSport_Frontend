import React, { useState } from "react";
import { useCart } from "./CartContext";
import ProductoModal from "./ProductoModal";
import Swal from "sweetalert2";

export default function ListaProductosPorMarca({ productos, marca }) {
  const { addToCart } = useCart();
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productosFiltrados = productos.filter(
    (producto) => producto.marca.toLowerCase() === marca.toLowerCase()
  );

  const handleAgregarAlCarrito = (producto) => {
    addToCart(producto);
    Swal.fire({
      title: '¡Producto agregado!',
      text: `${producto.nombre} ha sido agregado al carrito.`,
      icon: 'success',
      timer: 1500,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
    });
  };

  if (productosFiltrados.length === 0) {
    return (
      <div className="text-center text-black py-10">
        <p>No hay productos disponibles para la marca {marca}.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productosFiltrados.map((producto) => (
          <div
            key={producto.id}
            className="bg-gray-300 m-2 rounded shadow p-4 hover:scale-110 transition-transform cursor-pointer"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-40 object-contain mb-3"
              onClick={() => setProductoSeleccionado(producto)}
            />
            <p className="text-gray-700 mt-2 text-sm font-semibold">{producto.nombre}</p>
            <p className="text-green-700">${producto.precio}</p>
            <button
              onClick={() => handleAgregarAlCarrito(producto)}
              className="w-full bg-indigo-600 text-white py-2 mt-5 rounded-lg hover:scale-105 transition"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      <ProductoModal
        producto={productoSeleccionado}
        onClose={() => setProductoSeleccionado(null)}
        onAgregar={handleAgregarAlCarrito}
      />
    </>
  );
}
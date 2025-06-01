import React from 'react';
import { useCart } from '../components/CartContext';
import Navbar from '../components/Nav';
import Footer from '../components/footer';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, actualizarCantidad } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
      <div className="min-h-screen bg-[#242424]  ">
          {/* HERO */}
      <header className="text-center text-black py-6 px-4 bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Bienvenidos a H&amp;L Sports</h1>
        <p className="text-base sm:text-lg">
          Tu tienda online de ropa deportiva confiable y con estilo
        </p>
      </header>
      {/* NAVBAR */}
      <Navbar />
      <br />
    <div className="max-w-lg mx-auto bg-gray-100 p-10 rounded-lg mt-10 mb-30 shadow-md space-y-4">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item._id} className="border-b py-4 flex justify-between items-center">
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-20 h-20 object-cover rounded mr-4"></img>
              <div>
                <h2 className="font-semibold">{item.nombre}</h2>
                <p>Cantidad:
                   <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => actualizarCantidad(item._id, parseInt(e.target.value))}
                    className="w-16 border rounded px-2 ml-2"
                  />
                </p>
                
              </div>
              <div className="flex gap-4 items-center">
                <p className="font-bold">${item.precio * item.quantity}</p>
                <button
                  className="bg-red-500 text-white p-2 m-5 rounded-lg hover:scale-105 transition"
                  onClick={() => removeFromCart(item._id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: ${total}</h3>
            
            <button onClick={clearCart} className="bg-black text-white p-2 m-5 rounded-lg hover:scale-105 transition hover:bg-black-500">
              Vaciar Carrito
            </button>
            
            <button  className="bg-green-600 text-white p-2 m-5 rounded-lg hover:scale-105 transition hover:bg-green-600">
              Proceder al Pago
            </button>
          </div>
        </div>
      )}
    </div>
   
  <Footer/>
   </div>
  );
}

import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";

export default function Contacto() {
  return (

    <div className="bg-gray-100 text-gray-800"> 
     <header className="bg-black text-white text-center py-8 px-4">
        <h1 className="text-3xl font-bold">H&L Sports</h1>
        <p className="mt-2">Tu tienda online de ropa deportiva confiable y con estilo</p>
      </header>
       <Nav />
    
   
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Sección Quiénes Somos */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">¿Quiénes somos?</h2>
          <p className="mb-4">
            <strong>H&L Sports</strong> Somos una tienda virtual especializada en ropa deportiva de alta calidad. Nuestra misión es ofrecer productos que no solo se vean bien, sino que también sean cómodos, duraderos y estén a la altura del rendimiento que cada atleta o aficionado necesita.
          </p>
          <p className="mb-4">
            Contamos con una variedad de marcas reconocidas como Nike, Adidas, Puma y Reebok, asegurando que cada prenda cumpla con los estándares más altos en materiales y diseño.
          </p>
          <p>
            <strong>¿Por qué confiar en nosotros?</strong> Porque somos apasionados del deporte y sabemos lo importante que es sentirse bien y seguro al entrenar. Todos nuestros productos están verificados y garantizados para que tu experiencia de compra sea 100% satisfactoria.
          </p>
        </section>

        {/* Sección Contacto */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Contáctanos</h2>
          <p className="mb-6">¿Tienes dudas, sugerencias o necesitas ayuda con un pedido? ¡Estamos aquí para ayudarte!</p>
          <form
            action="mailto:contacto@hlsports.com"
            method="post"
            encType="text/plain"
            className="flex flex-col space-y-4"
          >
            <label htmlFor="nombre" className="font-semibold">Nombre:</label>
            <input id="nombre" name="nombre" type="text" required className="p-2 border rounded" />

            <label htmlFor="correo" className="font-semibold">Correo electrónico:</label>
            <input id="correo" name="correo" type="email" required className="p-2 border rounded" />

            <label htmlFor="mensaje" className="font-semibold">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="5" required className="p-2 border rounded"></textarea>

            <button type="submit" className="mt-6 bg-indigo-700 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 transition">
              Enviar mensaje
            </button>
          </form>

          {/* Información de administradores */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-indigo-700 mb-6">Administradores y creadores de H&L Sports</h3>

            {[{
              nombre: "Esteban Higuera",
              celular: "+57 310 456 7890",
              instagram: "@esteban_hig",
              correo: "esteban@hlsports.com",
              foto: "/imagenes/Foto_EstebanHiguera.jpg"
            }, {
              nombre: "Maryan Lee",
              celular: "+57 318 123 4567",
              instagram: "@maryanlee",
              correo: "maryan@hlsports.com",
              foto: "/imagenes/maryan.jpg"
            }].map((admin, index) => (
              <div key={index} className="flex flex-wrap items-center gap-6 mb-8 border-l-4 border-indigo-700 pl-4">
                <img src={admin.foto} alt={`Foto de ${admin.nombre}`} className="w-24 h-24 rounded-full object-cover" />
                <div>
                  <p><strong>Nombre:</strong> {admin.nombre}</p>
                  <p><strong>Celular:</strong> {admin.celular}</p>
                  <p><strong>Instagram:</strong> <a href={`https://instagram.com/${admin.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="text-indigo-700">{admin.instagram}</a></p>
                  <p><strong>Correo:</strong> {admin.correo}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Redes sociales de la tienda */}
          <div className="text-center border-t pt-6">
            <h3 className="text-xl font-bold text-indigo-700">Redes sociales de H&L Sports</h3>
            <p><strong>Instagram:</strong> <a href="https://instagram.com/hlsports" className="text-indigo-700" target="_blank" rel="noopener noreferrer">@hlsports</a></p>
            <p><strong>Facebook:</strong> <a href="https://facebook.com/hlsports" className="text-indigo-700" target="_blank" rel="noopener noreferrer">facebook.com/hlsports</a></p>
            <p><strong>WhatsApp:</strong> +57 300 123 4567</p>
            <p><strong>Email:</strong> contacto@hlsports.com</p>
          </div>
        </section>
      </main>
    </div>
  );
};

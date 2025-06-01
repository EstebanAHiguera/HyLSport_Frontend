import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import ListaProductosPorMarca from "../components/ListarProductosPorMarca";

export default function Reebok() {
  const [productos, setProductos] = useState([]);

  // Cargar productos de Reebok desde el backend
  useEffect(() => {
    fetch("http://localhost:5000/api/productos/marca/reebok")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos Reebok:", error));
  }, []);
console.log("Productos cargados:", productos);
  return (
    <div className="font-sans bg-white/80  text-white min-h-screen flex flex-col">
        {/* Hero */}
      <header className="bg-white/80 flex flex-col min-h-[100px] relative">
        <div className="flex justify-center py-5 px-10">
          <img
            src="imagenes/reebok.png"
            alt="Reebok"
            className="h-[50px]"
          />
        </div>
      </header>
      {/*Barra de Navegacion */}
      <Nav />
      {/* Productos filtrados por marca */}
      <ListaProductosPorMarca productos={productos} marca="reebok" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

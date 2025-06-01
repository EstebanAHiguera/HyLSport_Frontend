import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import ListaProductosPorMarca from "../components/ListarProductosPorMarca";

export default function Nike() {
  const [productos, setProductos] = useState([]);

  // Obtener productos desde el backend filtrados por marca
  useEffect(() => {
    fetch("http://localhost:5000/api/productos/marca/nike")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos Nike:", error));
  }, []);

  return (
    <div className="font-sans bg-white/80  text-white min-h-screen flex flex-col">
     
      {/* Hero */}
      <header className="bg-white/80 flex flex-col min-h-[100px] relative">
        <div className="flex justify-center px-4 py-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike"
            className="h-[50px]"
          />
        </div>
      </header>
    {/* barra de navegacion */}
      <Nav />

      {/* Productos filtrados por marca */}
      <ListaProductosPorMarca productos={productos} marca="nike" />

      {/* Footer */}
      <Footer />
    </div>
  );
}


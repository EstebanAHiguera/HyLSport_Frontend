import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import ListaProductosPorMarca from "../components/ListarProductosPorMarca";

export default function Puma() {
  const [productos, setProductos] = useState([]);

  // Cargar productos Puma desde backend
  useEffect(() => {
    fetch("http://localhost:5000/api/productos/marca/puma")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos Puma:", error));
  }, []);
  console.log("Productos cargados:", productos);

  return (
    <div className="font-sans bg-white/80  text-white min-h-screen flex flex-col">
      {/* Hero */}
      <header className="bg-white/80 flex flex-col min-h-[100px] relative">
        <div className="flex justify-center px-4 py-6">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png"
            alt="Puma"
            className="h-[50px]"
          />
        </div>
      </header>
    {/* barra de navegacion */}
      <Nav />
      {/* Productos filtrados por marca */}
      <ListaProductosPorMarca productos={productos} marca="puma" />

      {/* Footer */}
      <Footer />
    </div>
  );
}


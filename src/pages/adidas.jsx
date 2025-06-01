import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/Nav";
import ListaProductosPorMarca from "../components/ListarProductosPorMarca";

export default function Adidas() {
  // Estado para almacenar los productos
  const [productos, setProductos] = useState([]);
 
  // Obtener productos desde el backend
  useEffect(() => {
    fetch("http://localhost:5000/api/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);
  console.log("Productos cargados:", productos);

return (
    <div className="font-sans bg-white/80  text-white min-h-screen flex flex-col">
     

      {/* HEADER */}
      <header className="bg-white/80 flex flex-col min-h-[100px] relative">
        <div className="flex justify-center my-2">
          <img src="imagenes/Adidas_logo.png" alt="Adidas" className="h-20" />
        </div>
      </header>
 {/* barra de navegacion */}
      <Nav />
      {/* Productos filtrados por marca */}
      <ListaProductosPorMarca productos={productos} marca="adidas" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

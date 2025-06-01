import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import ModalEditar from "../components/ModalEditar";

export default function Dashboard() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [marca, setMarca] = useState("");
  const [modalAbierto, setModalAbierto] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/productos");
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const convertirABase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setImagen(reader.result);
    reader.onerror = (error) => console.error("Error al leer imagen", error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nombre, descripcion, precio, imagen, marca }),
      });

      if (res.ok) {
        obtenerProductos();
        setNombre("");
        setDescripcion("");
        setPrecio("");
        setImagen("");
        setMarca("");

        Swal.fire({
          icon: "success",
          title: "Producto añadido",
          text: "Tu producto fue añadido exitosamente",
          confirmButtonColor: "#166534",
          confirmButtonText: "Aceptar",
        });
      } else {
        Swal.fire("Error", "No se pudo guardar el producto", "error");
      }
    } catch (error) {
      console.error("Error al guardar producto:", error);
      Swal.fire("Error", "Hubo un problema al enviar el producto", "error");
    }
  };

  const editarProducto = (producto) => {
    setProductoSeleccionado(producto);
    setModalAbierto(true);
  };

  const eliminarProducto = async (id) => {
    const confirmacion = await Swal.fire({
      title: "¿Eliminar producto?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#166534",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirmacion.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:5000/api/productos/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          obtenerProductos();
          Swal.fire("Eliminado", "El producto ha sido eliminado", "success");
        } else {
          Swal.fire("Error", "No se pudo eliminar el producto", "error");
        }
      } catch (error) {
        console.error("Error al eliminar:", error);
        Swal.fire("Error", "Hubo un error al eliminar el producto", "error");
      }
    }
  };

  return (
    <div className="bg-[#242424]">
      {/* NAVBAR */}
      <Nav />

      {/* FORMULARIO AÑADIR */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg m-10 shadow-md space-y-4">
        <h2 className="text-black text-2xl font-bold text-center mt-4">Gestión de Productos</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre del producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => convertirABase64(e.target.files[0])}
            className="text-black"
          />
          <select
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            required
            className="p-2 border rounded"
          >
            <option value="">Seleccionar Marca</option>
            <option value="adidas">Adidas</option>
            <option value="nike">Nike</option>
            <option value="reebok">Reebok</option>
            <option value="puma">Puma</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Añadir Producto
          </button>
        </div>
      </form>

      {/* LISTADO DE PRODUCTOS */}
      <div className="bg-gray-100 ml-20 mr-20 mt-10 mb-20 border rounded">
        <div className="grid grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((p) => (
            <div key={p._id} className="bg-gray-300 rounded shadow p-4">
              {p.imagen && (
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="w-full h-40 object-contain mb-3"
                />
              )}
              <h3 className="font-semibold text-lg">{p.nombre}</h3>
              <p className="text-sm text-gray-600">{p.descripcion}</p>
              <p className="text-green-600 font-bold mt-1">${p.precio}</p>
              <p className="text-xs text-gray-400 mt-2">Marca: {p.marca}</p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => editarProducto(p)}
                  className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarProducto(p._id)}
                  className="bg-black text-white px-5 ml-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DE EDICIÓN */}
      {modalAbierto && productoSeleccionado && (
        <ModalEditar
          producto={productoSeleccionado}
          onClose={() => setModalAbierto(false)}
          onActualizar={obtenerProductos}
        />
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

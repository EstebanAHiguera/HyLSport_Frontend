// src/components/ModalEditar.jsx
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function ModalEditar({ producto, onClose, onActualizar }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [marca, setMarca] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (producto) {
      setNombre(producto.nombre);
      setDescripcion(producto.descripcion);
      setPrecio(producto.precio);
      setImagen(producto.imagen);
      setMarca(producto.marca);
    }
  }, [producto]);

  const convertirABase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setImagen(reader.result);
    reader.onerror = (error) => console.error("Error al leer imagen", error);
  };

  const handleActualizar = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/productos/${producto._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nombre, descripcion, precio, imagen, marca }),
      });

      if (res.ok) {
        Swal.fire("Actualizado", "El producto fue actualizado correctamente", "success");
        onActualizar(); // Actualiza la lista de productos en Dashboard
        onClose(); // Cierra el modal
      } else {
        Swal.fire("Error", "No se pudo actualizar el producto", "error");
      }
    } catch (error) {
      console.error("Error al actualizar:", error);
      Swal.fire("Error", "Error al actualizar producto", "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-gray-100  p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Editar Producto</h2>
        <form onSubmit={handleActualizar} className="space-y-3">
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full p-2 border rounded" placeholder="Nombre" required />
          <input value={precio} type="number" onChange={(e) => setPrecio(e.target.value)} className="w-full p-2 border rounded" placeholder="Precio" required />
          <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="w-full p-2 border rounded" placeholder="Descripción" />
          <input type="file" accept="image/*" onChange={(e) => convertirABase64(e.target.files[0])} className="text-black" />
          <select value={marca} onChange={(e) => setMarca(e.target.value)} className="w-full p-2 border rounded" required>
            <option value="">Seleccionar Marca</option>
            <option value="adidas">Adidas</option>
            <option value="nike">Nike</option>
            <option value="reebok">Reebok</option>
            <option value="puma">Puma</option>
          </select>

          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">Cancelar</button>
            <button type="submit" className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">Guardar Cambios</button>
          </div>
        </form>
      </div>
    </div>
  );
}

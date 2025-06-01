import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";


export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    phone: "",
    correo: "",
    contrasena: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/api/login/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        correo: formData.correo,
        contrasena: formData.contrasena,
      }),
    });
 // Guarda el token si es necesario: localStorage.setItem("token", data.token);
         // ✅ Guarda los datos del usuario en localStorage
const data = await response.json();
if (response.ok) {
  Swal.fire({
    icon: "success",
    title: "¡Inicio de sesión exitoso!",
    showConfirmButton: false,
    timer: 1500
  });
  // Guarda el token si es necesario: localStorage.setItem("token", data.token);
  // ✅ Guarda los datos del usuario en localStorage
  localStorage.setItem("token", data.token);
  localStorage.setItem("usuario", JSON.stringify(data.usuario));
  // Redirige al usuario a la página principal
  navigate("/");
} else {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: data.mensaje || "Error en login"
  });
}
} catch (error) {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Error en login: " + error.message
  });
}

};

const handleRegister = async (e) => {
  e.preventDefault();
  try {
    console.log("JSON enviado:", {
      nombre: formData.nombre,
      phone: formData.phone,
      correo: formData.correo,
      contrasena: formData.contrasena,
    });
    const response = await fetch("http://localhost:5000/api/login/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      
      body: JSON.stringify({
        nombre: formData.nombre,
        phone: formData.phone,
        correo: formData.correo,
        contrasena: formData.contrasena,
      }),
    });

  const data = await response.json();
if (response.ok) {
  Swal.fire({
    icon: "success",
    title: "¡Registro exitoso!",
    showConfirmButton: false,
    timer: 1500
  });
  setIsRegistering(false);
} else {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: data.mensaje || "Error en registro"
  });
}
} catch (error) {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Error en registro: " + error.message
  });
}

};


  return (
    <div className="w-screen h-screen bg-[#242424] flex items-center justify-center overflow-hidden">
      <div className="flex flex-col md:flex-row bg-gray-300 rounded-lg shadow-lg w-[90%] max-w-6xl overflow-hidden">
        {/* Logo */}
        <div className="flex-1 bg-white flex flex-col justify-center items-center p-6 text-center">
          <img
            src="/imagenes/h&llogo.png"
            alt="H&L SPORTS Logo"
            className="max-w-[80%] h-auto mb-4"
          />
          <p className="text-lg font-bold text-black">
            ¡Encuentra tus marcas favoritas con nosotros!
          </p>
        </div>

        {/* Formulario */}
        <div className="flex-1 p-10 text-center text-black">
          <h2 className="mb-5 text-2xl text-black font-semibold font-sans">
            {isRegistering ? "Regístrate en H&L SPORTS" : "Ingresa a H&L SPORTS"}
          </h2>

          {isRegistering ? (
            <form className="register-form" onSubmit={handleRegister}>
              <InputField id="nombre" label="Nombre completo" placeholder="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
              <InputField id="phone" label="Número de celular" placeholder="número de celular" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              <InputField id="correo" label="Correo electrónico" placeholder="correo electrónico" type="email" name="correo" value={formData.correo} onChange={handleChange} />
              <InputField id="contrasena" label="Contraseña" placeholder="clave" type="password" name="contrasena" value={formData.contrasena} onChange={handleChange} />
              <SubmitButton label="Registrarme" />
            </form>
          ) : (
            <form className="login-form" onSubmit={handleLogin}>
              <InputField id="correo" label="Correo" placeholder="correo" type="email" name="correo" value={formData.correo} onChange={handleChange} />
              <InputField id="contrasena" label="Contraseña" placeholder="clave" type="password" name="contrasena" value={formData.contrasena} onChange={handleChange} />
              <SubmitButton label="Iniciar Sesión" />
            </form>
          )}

          <p className="mt-4 text-sm text-black">
            {isRegistering ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
            <button
              className="text-blue-600 hover:text-blue-800 transition-colors"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? "Inicia sesión" : "Regístrate ahora"}
            </button>
          </p>
          <Link to="/" className="text-white hover:text-blue-400 transition-colors">
          <button
            id="guest-btn"
            className="w-full py-2 mt-4 bg-green-600 hover:bg-green-700 text-white rounded-md text-base" > 
            Ingresar como invitado
           </button> 
           </Link>
        </div>
      </div>
    </div>
  );
}

function InputField({ id, label, type = "text", placeholder, name, value, onChange }) {
  return (
    <div className="mb-4 text-left">
      <label htmlFor={id} className="block mb-1 text-black">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function SubmitButton({ label }) {
  return (
    <button
      type="submit"
      className="w-full py-2 mt-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-md text-base"
    >
      {label}
    </button>
  );
}

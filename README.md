# 🏃‍♀️ HyLSport - Frontend

Este es el frontend del proyecto **HyLSport**, una tienda deportiva en línea desarrollada con **React** y **Vite**. Permite a los usuarios explorar productos por marca (Adidas, Nike, Puma, Reebok), añadirlos al carrito y gestionar compras. Además, incluye un panel de administración para subir y editar productos desde el cliente.

---

## ⚙️ Tecnologías usadas

- React
- Vite
- React Router DOM
- Context API (para el carrito de compras global)
- Tailwind CSS
- Fech
- React Icons
- SweetAlert2

---

## 📁 Estructura del proyecto

HyLSport_Frontend/

├── public/

├── src/

│ ├── components/ # Header, Footer, CardProduct, etc.

│ ├── pages/ # Adidas.jsx, Nike.jsx, Reebok.jsx, Puma.jsx, Dashboard.jsx

│ ├── context/ # CarritoContext.jsx

│ └── App.jsx

├── .env

├── .gitignore

├── package.json

└── vite.config.js

---

## 🔧 Configuración

1. Clona el repositorio:
   bash
git clone https://github.com/EstebanAHiguera/HyLSport_Frontend.git

2. Instala las dependencias:
npm install 

3. Crea un archivo .env con tu URL de backend:
   VITE_API_URL=http://localhost:5000/api

4. inicia la aplicacion
   npm run dev
---
✨ Funcionalidades destacadas
Visualización de productos deportivos por marca

Carrito de compras global con Context API

Panel de administración para:

Crear productos

Subir imágenes

Editar o eliminar productos

Comunicación con el backend por medio de Axios

Diseño responsive con Tailwind CSS

---
🧪 Rutas principales
/ → Página principal

/adidas, /nike, /puma, /reebok → Productos por marca

/dashboard → Panel de administrador

/cart → Carrito de compras

---
🧑‍💻 Autor
Desarrollado por Esteban Higuera y Maryan Lee como parte del proyecto de tienda deportiva HyLS

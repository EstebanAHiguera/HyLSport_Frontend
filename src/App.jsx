import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Nike from './pages/nike';
import Puma from './pages/puma';
import Adidas from './pages/adidas';
import Reebok from './pages/reebok';   
import Dashboard from './pages/Dashboard';
import Contacto from './pages/Contacto';
import Cart from './pages/Cart';

function App() {

  return (
  
     <BrowserRouter>
      <Routes>
           
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          
          {/* Rutas de marcas */}
          <Route path="/adidas" element={<Adidas/>} />
          <Route path="/nike" element={<Nike />} />
          <Route path="/reebok" element={<Reebok />} />
          <Route path="/puma" element={<Puma />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Login/>} />
          <Route path="/Cart" element={<Cart />} />
          
      </Routes>
      
      {/* Aquí puedes agregar más rutas según sea necesario */}
    </BrowserRouter>
  );
}
// Aquí puedes definir tus rutas y componentes
// Puedes usar <Route> para definir las rutas y los componentes que se renderizarán
export default App;



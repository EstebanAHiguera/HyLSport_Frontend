import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find(item => item._id === product._id);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item._id !== productId));
  };

 const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      removeFromCart(id); // Elimina si la cantidad es 0 o menor
    } else {
      setCartItems(cartItems.map(item =>
        item._id === id ? { ...item, quantity: nuevaCantidad } : item
      ));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, actualizarCantidad, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

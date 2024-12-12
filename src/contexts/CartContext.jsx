import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; 

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Carregar itens do cookie ao montar o componente
  useEffect(() => {
    const storedCartItems = Cookies.get('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Salvar itens no cookie sempre que o estado de cartItems mudar
  useEffect(() => {
    if (cartItems.length > 0) {
      Cookies.set('cartItems', JSON.stringify(cartItems), { expires: 7 });
    } else {
      Cookies.remove('cartItems'); 
    }
  }, [cartItems]);

  // Função para adicionar item ao carrinho
 const addToCart = (item) => {
  setCartItems(() => {
    const updatedCart = [item]; 
    Cookies.set('cartItems', JSON.stringify(updatedCart), { expires: 7 });
    return updatedCart;
  });
};
const isItemInCart = (id) => {
  return cartItems.length > 0 && cartItems[0].id === id;
};

  // Função para remover item do carrinho
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => {
      const updatedCartItems = prevItems.filter(item => item.item.id !== itemId);
      Cookies.set('cartItems', JSON.stringify(updatedCartItems), { expires: 7 }); 
      return updatedCartItems;
    });
  };
  const updateCartItem = (updatedItem) => {
    setCartItems(prevItems => {
      const updatedCartItems = prevItems.map(item => 
        item.item.id === updatedItem.item.id ? updatedItem : item
      );
      Cookies.set('cartItems', JSON.stringify(updatedCartItems), { expires: 7 });
      return updatedCartItems;
    });
  };
  
  const submitCartData = () => {
   
    return cartItems;
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, isItemInCart, removeFromCart, updateCartItem, submitCartData }}>
    {children}
  </CartContext.Provider>
  );
};

export { CartContext, CartProvider };


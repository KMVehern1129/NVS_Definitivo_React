import { createContext, useContext, useState } from 'react';

const carritoContext = createContext(null);

export const ApiCarrito = ({ children }: { children: React.ReactNode }) => {
  const [Cart, setCart] = useState([]);

  return (
    <carritoContext.Provider value={{ Cart, setCart}}>
      {children}
    </carritoContext.Provider>
  );
};

export const useApiContextProduct = () => {
  const context = useContext(carritoContext);
  if (!context) throw new Error('useApi debe usarse dentro de ApiProducto');
  return context;
};
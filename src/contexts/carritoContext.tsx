import { createContext, useContext, useState } from 'react';
import { Producto } from './productContext';

interface CarritoContextType {
    Cart: Producto[];
    setCart: React.Dispatch<React.SetStateAction<Producto[]>>;
  }

const carritoContext = createContext<CarritoContextType | null>(null);

export const ApiCarrito = ({ children }: { children: React.ReactNode }) => {
  const [Cart, setCart] = useState<Producto[]>([]);

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
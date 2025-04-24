import { createContext, useContext, useState, useEffect } from 'react';
import { ApiGet } from '@hooks/UseAxios';

export interface Producto {
    idProducto: number;
    nombreProducto: string;
    precioProducto: number;
    ivaProducto: number;
    garantiaProducto: string;
    idTipoProducto: string;
    idAdministrar_crear: number;
    stock: number;
}

interface ApiContextProps {
  responseFilter: Producto[];
  cargarProductos: () => void;
}

const ApiContext = createContext<ApiContextProps | null>(null);

export const ApiProducto = ({ children }: { children: React.ReactNode }) => {
  const [responseFilter, setResponseFilter] = useState<Producto[]>([]);

  const cargarProductos = async () => {
    try {
      const response = await ApiGet('/Productos/Producto.php');
      if(response){
        const productos = response.data as Producto[];
        const filtrados = productos.filter((p) => p.stock === 1);
        setResponseFilter(filtrados)
      }
    } catch (error) {
      console.error('Error al cargar productos', error);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <ApiContext.Provider value={{ responseFilter, cargarProductos}}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContextProduct = () => {
  const context = useContext(ApiContext);
  if (!context) throw new Error('useApi debe usarse dentro de ApiProducto');
  return context;
};
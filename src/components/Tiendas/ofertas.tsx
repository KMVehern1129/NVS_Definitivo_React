import { useApiContextProduct, Producto } from '@contexts/productContext';
import { useEffect, useState } from 'react';
import image1 from "@assets/imgs/img/xbox/halo4-large-hero-1920x675-new-9c4f9e45505645a7aff35068944e3506.jpg"
const Ofertas = () => {
    const { responseFilter } = useApiContextProduct();
    const [response, setResponse] = useState<Producto[]>([]);

    useEffect(()=> {
        const FilterJue = responseFilter.filter(item => item.precioProducto <= 300000);
        if (FilterJue) {setResponse(FilterJue)};
    },[responseFilter])
    
    return (
        <div>
        <div className="span">
                <span>
                    Las ofertas de la semana
                </span>
            </div>
            <section className="container-juegos2">
                {response.slice(0, 3).map((producto, index) => {
                    return (
                        <div key={producto.idProducto} className="j1" style={{ gridArea: `j${index + 1}` }}>
                            <div className="img-card">
                                <img src={image1} alt={producto.nombreProducto} />
                            </div>
                            <div className="text-card">
                                <span className="tittle-card">{producto.nombreProducto}</span>
                                <span className="price-card">
                                    {producto.precioProducto.toLocaleString('es-CO', {
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0
                                    })}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </section>
    </div>
    )
}
export default Ofertas;
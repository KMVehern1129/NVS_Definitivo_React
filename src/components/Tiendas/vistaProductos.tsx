//contexts
import { useApiContextProduct, Producto } from '@contexts/productContext';

//components
import Ofertas from './ofertas';
import { useState, useEffect } from 'react';

//librerias
import Swal from 'sweetalert2';

//hooks
import { ApiGet } from '@hooks/UseAxios.tsx';

//css
import '@css/principal/index.css';

type Props = {
    tienda: string;
};

type AuxMarca = {
    fk_pk_producto: number;
    fk_pk_marca: string;
}

const Vista_Productos = ({ tienda }: Props) => {

    const endpoint: string = '/Productos/AuxMarca.php';
    const { responseFilter } = useApiContextProduct();
    const [response, setResponse] = useState<Producto[]>([]);
    const [responseAux, setResponseAux] = useState<AuxMarca[]>([]);
    const [imagenes, setImagenes] = useState<Record<string, { default: string }>>({});

    const getAuxMarca = async () => {
        try {
            const result = await ApiGet(endpoint);
            if (result) {
                setResponseAux(result.data);
            } else {
                console.error('No se recibieron datos o los datos están en un formato inesperado');
            }
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener la información',
            });
        }
    };

    useEffect(() => {
        getAuxMarca();
        switch (tienda) {
            case "Inicio": {
                setResponse(responseFilter);
                const imgs = import.meta.glob('/src/assets/imgs/img/imagenesMain/imgCards/*.png', { eager: true }) as Record<string, { default: string }>;
                setImagenes(imgs);
                break;
            }
            case "Videojuegos": {
                const FilterJue = responseFilter.filter(item => item.idTipoProducto === "Videojuego");
                if (FilterJue) setResponse(FilterJue);
                const imgs = import.meta.glob('/src/assets/imgs/img/videojuegos/imgCards/*.png', { eager: true }) as Record<string, { default: string }>;
                setImagenes(imgs);
                break;
            }
            case "Consolas": {
                const FilterCon = responseFilter.filter(item => item.idTipoProducto === "Consola");
                if (FilterCon) setResponse(FilterCon);
                const imgs = import.meta.glob('/src/assets/imgs/img/consolas img/*.png', { eager: true }) as Record<string, { default: string }>;
                setImagenes(imgs);
                break;
            }
            case "Nintendo": {
                const FilterNin = responseAux.filter(item => item.fk_pk_marca === "Nintendo");
                const coincidencias = responseFilter.filter(p1 =>
                    FilterNin.some(p2 => p2.fk_pk_producto === p1.idProducto));
                setResponse(coincidencias);
                const imgs = import.meta.glob('/src/assets/imgs/img/nintendo/imgCards/*.png', { eager: true }) as Record<string, { default: string }>;
                setImagenes(imgs);
                break;
            }
            case "PlayStation": {
                const FilterPlay = responseAux.filter(item => item.fk_pk_marca === "PlayStation");
                const coincidenciasP = responseFilter.filter(p1 =>
                    FilterPlay.some(p2 => p2.fk_pk_producto === p1.idProducto));
                setResponse(coincidenciasP);
                const imgs = import.meta.glob('/src/assets/imgs/img/playstation/imgCards/*.png', { eager: true }) as Record<string, { default: string }>;
                setImagenes(imgs);
                break;
            }
            case "Xbox": {
                const FilterXbox = responseAux.filter(item => item.fk_pk_marca === "Xbox");
                const coincidenciasX = responseFilter.filter(p1 =>
                    FilterXbox.some(p2 => p2.fk_pk_producto === p1.idProducto));
                setResponse(coincidenciasX);
                const imgs = import.meta.glob('/src/assets/imgs/img/xbox/imgCards/*.png', { eager: true }) as Record<string, { default: string }>;
                setImagenes(imgs);
                break;
            }
        }
    },[]);

    const SeleccionarTienda = (nombre: string, tienda: string) => {
        switch (tienda) {
            case "Inicio":{
                const key = `/src/assets/imgs/img/imagenesMain/imgCards/${nombre}.png`;
                const img = imagenes[key] as { default: string } | undefined;
                return img?.default || (imagenes['/src/assets/imgs/img/imagenesMain/imgCards/default.png'] as { default: string }).default;}
            case "Videojuegos":
                {const keyV = `/src/assets/imgs/img/videojuegos/imgCards/${nombre}.png`;
                const imgV = imagenes[keyV] as { default: string } | undefined;
                return imgV?.default || (imagenes['/src/assets/imgs/img/videojuegos/imgCards/default.png'] as { default: string }).default;}
            case "Consolas":
                {const keyC = `/src/assets/imgs/img/consolas img/${nombre}.png`;
                const imgC = imagenes[keyC] as { default: string } | undefined;
                return imgC?.default || (imagenes['/src/assets/imgs/img/consolas img/default.png'] as { default: string }).default;}
            case "Nintendo":
                {const keyN = `/src/assets/imgs/img/nintendo/imgCards/${nombre}.png`;
                const imgN = imagenes[keyN] as { default: string } | undefined;
                return imgN?.default || (imagenes['/src/assets/imgs/img/nintendo/imgCards/default.png'] as { default: string }).default;}
            case "PlayStation":
                {const keyP = `/src/assets/imgs/img/playstation/imgCards/${nombre}.png`;
                const imgP = imagenes[keyP] as { default: string } | undefined;
                return imgP?.default || (imagenes['/src/assets/imgs/img/playstation/imgCards/default.png'] as { default: string }).default;}
            case "Xbox":
                {const keyX = `/src/assets/imgs/img/xbox/imgCards/${nombre}.png`;
                const imgX = imagenes[keyX] as { default: string } | undefined;
                return imgX?.default || (imagenes['/src/assets/imgs/img/xbox/imgCards/default.png'] as { default: string }).default;}
        }
    };

    return (
        <div>
            <section className="container-juegos">
                {response.slice(0, 9).map((producto, index) => {
                    const imagen = SeleccionarTienda(producto.nombreProducto, tienda);
                    return (
                        <div key={producto.idProducto} className="j1" style={{ gridArea: `j${index + 1}` }}>
                            <div className="img-card">
                                <img src={imagen} alt={producto.nombreProducto} />
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
            <Ofertas />
        </div>
    )
}
export default Vista_Productos;
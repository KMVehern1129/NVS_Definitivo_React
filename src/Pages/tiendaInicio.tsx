//assets
import imageBanner from '@assets/imgs/img/imagenesMain/mm (1).jpg'

//components
import Vista_Productos from '@components/Tiendas/vistaProductos';
import Footer from '@components/Tiendas/footer';

//contexts
import { Producto } from '../contexts/productContext';

//css
import '@css/principal/index.css';

interface TiendaInicioProps {
    Banner: Producto | null;
}

const Tienda_Inicio = ({ Banner }: TiendaInicioProps) => {
    return (
        <main className="container-principal">
            <header>
                <figure>
                    <img src={imageBanner} alt="" width="100%" />
                    <div className="text-img-banner">
                        {Banner && (
                            <span>{Banner.nombreProducto}
                            </span>
                        )}
                        <div className="price">
                            <button className="button-info">INFO</button>
                            <div className="cont-price">
                                <span className="price-one">
                                    $600.000
                                </span>

                                {Banner && (
                            <span className="price-two">{Banner.precioProducto.toLocaleString('es-CO', {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                              })}
                            </span>
                        )}
                            </div>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </figure>
            </header>
            <div className="span">
                <span>
                    Tendencias
                </span>
            </div>
            <Vista_Productos tienda="Inicio"/>
            <Footer/>
        </main>
    )
};

export default Tienda_Inicio
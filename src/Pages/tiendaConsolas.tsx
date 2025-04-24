import Footer from "@components/Tiendas/footer";
import Vista_Productos from "@components/Tiendas/vistaProductos";
import { useState, useEffect } from "react";
import Banner from '@assets/imgs/img/consolas img/banner.png'
import imgNombreConsola from '@assets/imgs/imgXbox.png'

//contexts
import { Producto, useApiContextProduct } from '../contexts/productContext';

//css





const Tienda_Consolas = () => {
    const { responseFilter } = useApiContextProduct();
    const [BannerInicio, setBannerInicio] = useState<Producto | null>(null);

    useEffect(() => {
        const BannerInicioF = responseFilter.find(item => item.nombreProducto === "Marvel’s Spider-Man: Miles Morales");

        if (BannerInicioF) setBannerInicio(BannerInicioF);
    }, [responseFilter]);
    return (
        <main className="container-principal">
            <header>
                <figure>
                    <img src={Banner} alt="" width="100%" />
                    <div className="text-img-banner">
                        <div className="img-left">
                            <img src={imgNombreConsola} alt="" width="40%" />
                        </div>
                        <div className="price">
                            <button className="button-info">INFO</button>
                            <div className="cont-price">
                                <span className="price-one">
                                    $600.000
                                </span>

                                {BannerInicio && (
                                    <span className="price-two">{BannerInicio.precioProducto.toLocaleString('es-CO', {
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
                    !Lo mas Vendido!
                </span>
            </div>
            <Vista_Productos tienda="Consolas" />
            <Footer />
        </main>
    )
}
export default Tienda_Consolas;
//contexts
import { useApiContextProduct, Producto } from "@contexts/productContext";

//hooks
import { useState, useEffect } from "react";
//css
import "@css/principal/tiendaPlay.css"

//components
import Vista_Productos from "@components/Tiendas/vistaProductos";
import Footer from "@components/Tiendas/footer";

//assets
import imageBanner from "@assets/imgs/img/playstation/7325 (1).jpg"

const Tienda_Play = () => {
    const { responseFilter } = useApiContextProduct();
    const [BannerPlay, setBannerPlay] = useState<Producto | null>(null);

    useEffect(() => {
        const BannerPlayF = responseFilter.find(item => item.nombreProducto === "God of War");

        if (BannerPlayF) setBannerPlay(BannerPlayF);
    }, [responseFilter]);

    return (
        <main className="container-principal">
            <header>
                <figure>
                    <img src={imageBanner} alt="" width="100%" />
                    <div className="text-img-banner">
                        {BannerPlay && (
                            <span>{BannerPlay.nombreProducto}
                            </span>
                        )}
                        <div className="price">
                            <button className="button-info">INFO</button>
                            <div className="cont-price">
                                <span className="price-one">
                                    $600.000
                                </span>

                                {BannerPlay && (
                                    <span className="price-two">${BannerPlay.precioProducto.toLocaleString('es-CO', {
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
                    !Lo Mas Vendido!
                </span>
            </div>
            <Vista_Productos tienda="PlayStation" />
            <Footer />
        </main>
    )
};
export default Tienda_Play;
//contexts
import { useApiContextProduct, Producto } from "@contexts/productContext";

//hooks
import { useState, useEffect } from "react";
//css

//components
import Vista_Productos from "@components/Tiendas/vistaProductos";
import Footer from "@components/Tiendas/footer";

//assets
import imageBanner from "@assets/imgs/img/xbox/halo4-large-hero-1920x675-new-9c4f9e45505645a7aff35068944e3506.jpg"

const Tienda_Xbox = () => {
    const { responseFilter } = useApiContextProduct();
    const [BannerXbox, setBannerXbox] = useState<Producto | null>(null);

    useEffect(() => {
        const BannerXboxF = responseFilter.find(item => item.nombreProducto === "Halo 4");

        if (BannerXboxF) setBannerXbox(BannerXboxF);
    }, [responseFilter]);

    return (
        <main className="container-principal">
            <header>
                <figure>
                    <img src={imageBanner} alt="" width="100%" />
                    <div className="text-img-banner">
                        {BannerXbox && (
                            <span>{BannerXbox.nombreProducto}
                            </span>
                        )}
                        <div className="price">
                            <button className="button-info">INFO</button>
                            <div className="cont-price">
                                <span className="price-one">
                                    $600.000
                                </span>

                                {BannerXbox && (
                                    <span className="price-two">${BannerXbox.precioProducto.toLocaleString('es-CO', {
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
            <Vista_Productos tienda="Xbox" />
            <Footer />
        </main>
    )
};
export default Tienda_Xbox;
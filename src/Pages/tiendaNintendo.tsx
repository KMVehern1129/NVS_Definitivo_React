//contexts
import { useApiContextProduct, Producto } from "@contexts/productContext";

//hooks
import { useState, useEffect } from "react";
//css

//components
import Vista_Productos from "@components/Tiendas/vistaProductos";
import Footer from "@components/Tiendas/footer";

//assets
import imageBanner from "@assets/imgs/img/nintendo/image (4).png"

const Tienda_Nintendo = () => {
    const { responseFilter } = useApiContextProduct();
    const [BannerNintendo, setBannerNintendo] = useState<Producto | null>(null);

    useEffect(() => {
        const BannerNintendoF = responseFilter.find(item => item.nombreProducto === "Luigi's Mansion 2 HD Switch");

        if (BannerNintendoF) setBannerNintendo(BannerNintendoF);
    }, [responseFilter]);

    return (
        <main className="container-principal">
            <header>
                <figure>
                    <img src={imageBanner} alt="" width="100%" />
                    <div className="text-img-banner">
                        {BannerNintendo && (
                            <span>{BannerNintendo.nombreProducto}
                            </span>
                        )}
                        <div className="price">
                            <button className="button-info">INFO</button>
                            <div className="cont-price">
                                <span className="price-one">
                                    $600.000
                                </span>

                                {BannerNintendo && (
                                    <span className="price-two">${BannerNintendo.precioProducto.toLocaleString('es-CO', {
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
            <Vista_Productos tienda="Nintendo" />
            <Footer />
        </main>
    )
};
export default Tienda_Nintendo;
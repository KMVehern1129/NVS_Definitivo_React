//contexts
import { useApiContextProduct, Producto } from "@contexts/productContext";

//hooks
import { useState, useEffect } from "react";

//components
import Vista_Productos from "@components/Tiendas/vistaProductos";
import Footer from "@components/Tiendas/footer";

//assets
import imageBanner from "@assets/imgs/img/videojuegos/5679.jpg"

const Tienda_Videojuegos = () => {
    const { responseFilter } = useApiContextProduct();
    const [BannerVideojuegos, setBannerVideojuegos] = useState<Producto | null>(null);

    useEffect(() => {
        const BannerVideojuegosF = responseFilter.find(item => item.nombreProducto === "Red Dead Redemtiption II");

        if (BannerVideojuegosF) setBannerVideojuegos(BannerVideojuegosF);
    }, [responseFilter]);

    return (
        <main className="container-principal">
            <header>
                <figure>
                    <img src={imageBanner} alt="" width="100%" />
                    <div className="text-img-banner">
                        {BannerVideojuegos && (
                            <span>{BannerVideojuegos.nombreProducto}
                            </span>
                        )}
                        <div className="price">
                            <button className="button-info">INFO</button>
                            <div className="cont-price">
                                <span className="price-one">
                                    $600.000
                                </span>

                                {BannerVideojuegos && (
                                    <span className="price-two">${BannerVideojuegos.precioProducto.toLocaleString('es-CO', {
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
            <Vista_Productos tienda="Videojuegos" />
            <Footer />
        </main>
    )
};
export default Tienda_Videojuegos;
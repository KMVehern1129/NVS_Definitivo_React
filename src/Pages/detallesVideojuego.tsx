//contexts
import { useApiContextProduct, Producto } from "@contexts/productContext";

//hooks
import { useState, useEffect } from "react";


const DetallesVideojuego = () => {
    const { responseFilter } = useApiContextProduct();
        const [BannerNintendo, setBannerNintendo] = useState<Producto | null>(null);
    
        useEffect(() => {
            const BannerNintendoF = responseFilter.find(item => item.idProducto === id);
    
            if (BannerNintendoF) setBannerNintendo(BannerNintendoF);
        }, [responseFilter]);
    return (
        <main className="container-principal">
            <header>
                <figure>

                    <img src="<?= $imagen ?>" alt="" width="100%"/>
                        <div className="overlay"></div>
                        <section className="product-info">

                            <div className="product-image">
                                <img src="<?= $imagen ?>" alt="Ghost of Tsushima: Director's Cut"/>
                            </div>

                            <div className="product-details blurefect">
                                <div className="pd1">
                                    <h1></h1>
                                    <p className="platform">PS5</p>
                                </div>

                                <div className="pd1">
                                    <p className="price">-27%</p>
                                    <span></span>
                                </div>

                                <div className="container-button ">
                                    <button className="button">Agregar al Carrito</button>
                                    <button className="button-like">❤️</button>
                                </div>
                            </div>

                        </section>
                </figure>
            </header>
        </main>
    )
};
export default DetallesVideojuego

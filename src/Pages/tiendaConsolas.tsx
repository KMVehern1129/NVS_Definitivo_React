import Footer from "@components/Tiendas/footer";
import Vista_Productos from "@components/Tiendas/vistaProductos";
import { useState,useEffect } from "react";
import Banner from '@assets/imgs/img/consolas img/banner.png'

//contexts
import { Producto, useApiContextProduct } from '../contexts/productContext';

//css
import '@css/principal/index.css';




const Tienda_Consolas = () => {
    const { responseFilter } = useApiContextProduct();
    const [BannerInicio, setBannerInicio] = useState<Producto | null>(null);

    useEffect(() => {
      const BannerInicioF = responseFilter.find(item => item.nombreProducto === "Marvel’s Spider-Man: Miles Morales");
    
      if (BannerInicioF) setBannerInicio(BannerInicioF);
    }, [responseFilter]);
return(
<main className="container-principal">
            <header>
                <figure>
                    <img src={Banner} alt="" width="100%" />
                    <div className="text-img-banner">
                        {BannerInicio && (
                            <span>{BannerInicio.nombreProducto}
                            </span>
                        )}
                        <div className="price">
                            <button className="button-info">INFO</button>
                            <div className="cont-price">
                                <span className="price-one">
                                    $600.000
                                </span>

                                {BannerInicio && (
                            <span>{BannerInicio.precioProducto.toLocaleString('es-CO', {
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
            <Vista_Productos tienda="Consolas"/>
            <Footer/>
        </main>
)}
export default Tienda_Consolas;
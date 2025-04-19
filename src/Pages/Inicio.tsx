//components
import Nav from "@components/nav";

//hooks
import { useEffect, useState } from "react";
import { ApiGet } from "@hooks/UseAxios";

//css
import '@css/principal/index.css';

//img
import imgXbox from '@assets/imgs/imgXbox.png'
import imgXboxRight from '@assets/imgs/imgXboxRight.png'
import capPant from '@assets/imgs/Captura de pantalla 2024-08-16 001558.png'
import imgPlay from '@assets/imgs/imgPlay.png'
import imgPlayRight from '@assets/imgs/imgPs5Right.png'
import imgNin from '@assets/imgs/imgnin.png'
import imgNinRight from '@assets/imgs/imgninRight.png'

interface Producto {
  idProducto: number;
  nombreProducto: string;
  precioProducto: number;
  ivaProducto: number;
  garantiaProducto: string;
  idTipoProducto: string;
  idAdministrar_crear: number;
  stock: number;
}

const Inicio = () => {

  const endpoint: string = '/Productos/Producto.php';
  const [responseFind, setResponseFind] = useState<Producto[]>([]);
  const [Xbox, setXbox] = useState<Producto | null>(null);
  const [Nintendo, setNin] = useState<Producto | null>(null);
  const [Play, setPlay] = useState<Producto | null>(null);

  const AxiosPrincipal = async () => {
    try {
      const res = await ApiGet(endpoint);
      if (res) {
        const data: Producto[] = res.data;
        setResponseFind(data);

        const xboxItem = data.find(item => item.nombreProducto === "Xbox Series X");
        const nintendoItem = data.find(item => item.nombreProducto === "Nintendo Switch");
        const playItem = data.find(item => item.nombreProducto === "PlayStation 5");

        if (xboxItem) setXbox(xboxItem);
        if (nintendoItem) setNin(nintendoItem);
        if (playItem) setPlay(playItem);
      } else {
        console.log("error al cargar productos")
      }
    } catch (error) {
      console.error('Error cargando clientes:', error);
    }
  };

  useEffect(() => {
    AxiosPrincipal();
  }, []);

  return (
    <div className="container_Principal">
      <Nav />
      <section className="container_banners">
        <figure className="A1" style={{ gridArea: "A1" }}>
          <div className="cont-left">
            <div className="img-left">
              <img src={imgXbox} alt="" width="80%" />
            </div>
            <div className="price">
              <button className="button-info">INFO</button>
              <div className="cont-price">
                <span className="price-one">
                  $2.000.000
                </span>
                {Xbox && (
                  <span className="price-two">
                    ${Xbox.precioProducto.toLocaleString('es-CO', {
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
        <figure className="A2" style={{ gridArea: "A2" }}>
          <div className="cont-rigth">
            <div className="img-right"></div>
            <img className="imgXboxConsole" src={imgXboxRight} alt="" width="100%" />
            <img src={capPant} alt="" width="100%" />
          </div>
          <div className="overlay"></div>
        </figure>
        <figure className="B1" style={{ gridArea: "B1" }}>
          <div className="cont-left">
            <div className="img-left">
              <img src={imgPlay} alt="" width="90%" />
            </div>
            <div className="price">
              <button className="button-info">INFO</button>
              <div className="cont-price">
                <span className="price-one">
                  $1.300.000
                </span>
                {Play && (
                  <span className="price-two">
                    ${Play.precioProducto.toLocaleString('es-CO', {
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
        <figure className="B2" style={{ gridArea: "B2" }}>
          <div className="cont-rigth">
            <img className="imgXboxConsole" src={imgPlayRight} alt="" width="80%" />
          </div>
          <div className="overlay"></div>
        </figure>
        <figure className="C1" style={{ gridArea: "C1" }}>
          <div className="cont-left">
            <div className="img-left">
              <img src={imgNin} alt="" width="80%" />
            </div>
            <div className="price">
              <button className="button-info">INFO</button>
              <div className="cont-price">
                <span className="price-one">
                  $2.100.000
                </span>
                {Nintendo && (
                  <span className="price-two">
                    ${Nintendo.precioProducto.toLocaleString('es-CO', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0
                    })}
                  </span>
                )}
              </div>
            </div>
          </div>
        </figure>
        <figure className="C2" style={{ gridArea: "C2" }}>
          <div className="cont-rigth">
            <img className="imgXboxConsole" src={imgNinRight} alt="" width="90%" />
          </div>
        </figure>
      </section>
    </div>
  );
};

export default Inicio;
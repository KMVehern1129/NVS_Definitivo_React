import imageStars from "@assets/imgs/img/Footer/Captura de pantalla 2024-08-20 000440.png"
import imageRedes from "@assets/imgs/img/Footer/Captura de pantalla 2024-08-20 010228.png"

import '@css/principal/index.css';

const Footer = () => {
    return(
        <footer className="footerP">
            <div className="container-footer">
                <div className="p1">
                    <article className="cont-footer-cont">
                        <div>
                            <span>NVS</span>
                            <ul>
                                <li>Contactenos</li>
                                <li>Nosotros</li>
                                <li>Ubicación</li>
                            </ul>
                        </div>
                        <div>
                            <span>COMPRAR</span>
                            <ul>
                                <li>Lista de juegos</li>
                                <li>Lista de consolas</li>
                                <li>como comprar</li>
                            </ul>
                        </div>
                        <div>
                            <span>AYUDA</span>
                            <ul>
                                <li>Política de devolución</li>
                                <li>Mapa de sitio</li>
                                <li>Terminos y condiciones</li>
                            </ul>
                        </div>
                    </article>

                    <section className="section_F" >
                        <span>CALIFICANOS</span>
                        <img src={imageStars} alt="" width="40%"/>
                    </section>
                </div>
                <div className="p2">
                    <section className="section_F">
                        <span>
                            PQRS
                        </span>
                        <textarea name="" id="" placeholder="Deja un comentario..."></textarea>
                    </section>
                    <section className="section_F">
                        <span>SÍGUENOS</span>
                        <img src={imageRedes} alt="" width="30%"/>
                    </section>
                </div>
            </div>
            <div className="p3">
                <p>Copyright © 2024 NVS. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
export default Footer;
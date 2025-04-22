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

                    <section>
                        <span>CALIFICANOS</span>
                        <img src="img/Footer/Captura de pantalla 2024-08-20 000440.png" alt="" width="40%"/>
                    </section>
                </div>
                <div className="p2">
                    <section>
                        <span>
                            PQRS
                        </span>
                        <textarea name="" id="" placeholder="Deja un comentario..."></textarea>
                    </section>
                    <section>
                        <span>SÍGUENOS</span>
                        <img src="../../img/Footer/Captura de pantalla 2024-08-20 010228.png" alt="" width="30%"/>
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
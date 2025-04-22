const Ofertas = () => {
    return (
        <div>
        <div className="span">
                <span>
                    Las ofertas de la semana
                </span>
            </div>
        <section className="container-juegos2">

            <div className="j1" style={{ gridArea: "j1" }}>
                <div className="img-card">
                    <img src="../../img/nintendo/imgCards/emio-switch-switch-juego-nintendo-eshop-europe-cover (1).jpg" alt="" />
                </div>
                <div className="text-card">
                    <span className="tittle-card">
                        God of War
                    </span>
                    <span className="price-card">
                        $200.000
                    </span>
                </div>
            </div>
            <div className="j1" style={{ gridArea: "j2" }}>
                <div className="img-card">
                    <img src="../../img/nintendo/imgCards/hollow.avif" alt="" />
                </div>
                <div className="text-card">
                    <span className="tittle-card">
                        Hitman World of Assassination
                    </span>
                    <span className="price-card">
                        $200.000
                    </span>
                </div>
            </div>
            <div className="j1" style={{ gridArea: "j3" }}>
                <div className="img-card">
                    <img src="../../img/nintendo/imgCards/luigi-s-mansion-2-hd-switch-switch-juego-nintendo-eshop-europe-cover (1).jpg" alt="" />
                </div>
                <div className="text-card">
                    <span className="tittle-card">
                        Hodwarts Legacy
                    </span>
                    <span className="price-card">
                        $200.000
                    </span>
                </div>
            </div>
        </section>
    </div>
    )
}
export default Ofertas;
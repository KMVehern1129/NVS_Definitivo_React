const Filter = () => {
    return (
        <div>
            <div className="span2">
                <span>
                    Filtra por tus preferencias
                </span>
            </div>
            <section className="container-pre">
                <a className="pre1" style={{gridArea: "pre1"}}>
                    <p>Acción</p>
                </a>
                <div className="pre1" style={{gridArea: "pre2"}}>
                    <p>Arcade</p>
                </div>
                <div className="pre1" style={{gridArea: "pre3"}}>
                    <p>Aventura</p>
                </div>
                <div className="pre1" style={{gridArea: "pre4"}}>
                    <p>Estrategia</p>
                </div>
                <div className="pre1" style={{gridArea: "pre5"}}>
                    <p>FPS</p>
                </div>
                <div className="pre1" style={{gridArea: "pre6"}}>
                    <p>RPG</p>
                </div>
                <div className="pre1" style={{gridArea: "pre7"}}>
                    <p>Simulación</p>
                </div>
                <div className="pre1" style={{gridArea: "pre8"}}>
                    <p>Solitario</p>
                </div>
                <div className="pre1" style={{gridArea: "pre9"}}>
                    <p>VR</p>
                </div>
                <div className="pre1" style={{gridArea: "pre10"}}>
                    <p>Lucha</p>
                </div>
            </section>
            <span className="span3">
                <button>VER MÁS</button>
            </span>
        </div>
    )
}
export default Filter;
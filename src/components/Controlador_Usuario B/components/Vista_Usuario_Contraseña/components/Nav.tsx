const Nav = () => (
  <header className="header-principal">
    <nav className="navbar">
      <div className="container-nav blurefect">
        <img src="img/logoNVS.svg" alt="Logo" width="40vh" />
        <ul>
          <li><a href="">Inicio</a></li>
          <li><a href="menu/Videojuegos/videojuegos.html">Videojuegos</a></li>
          <li><a href="menu/Consolas/consolas.html">Consolas</a></li>
          <li><a href="menu/Nintendo/nintendo.html">Nintendo</a></li>
          <li><a href="">PlayStation</a></li>
          <li><a href="">Xbox</a></li>
        </ul>
      </div>
      <div className="container-nav-button">
        <a className="blurefect" href="idxlogin/login/index.html"><i className="fa-regular fa-user"></i></a>
        <a className="blurefect" href=""><i className="fa-solid fa-magnifying-glass"></i></a>
        <a className="blurefect" href="carrito/index.html"><i className="fa-solid fa-cart-shopping"></i></a>
      </div>
    </nav>
  </header>
);

export default Nav;

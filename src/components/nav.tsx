
//css
import '@css/principal/nav.css';
//assets
import settingImage1 from '@assets/imgs/logoNVS.svg'
//librerias

import { Link, Outlet } from 'react-router-dom'; 
import '@css/principal/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <div className="container_Principal">
            <header>
                <nav>
                    <div className="container_nav blurefect">
                        <img src={settingImage1} alt="Logo" width="40vh" />
                        <ul>
                            <li><Link to="/Inicio">Inicio</Link></li>
                            <li><Link to="/TiendaVideojuegos">Videojuegos</Link></li>
                            <li><Link to="/TiendaConsolas">Consolas</Link></li>
                            <li><Link to="/TiendaNintendo">Nintendo</Link></li>
                            <li><Link to="/TiendaPlayStation">PlayStation</Link></li>
                            <li><Link to="/TiendaXbox">Xbox</Link></li>
                        </ul>
                    </div>
                    <div className="container_nav_button">
                        <Link to="/recuperarContrasena" className="blurefect">
                            <FontAwesomeIcon icon={faUser} className="icon" />
                        </Link>
                        <a className="blurefect" href="#"><FontAwesomeIcon icon={faMagnifyingGlass} className="icon" /></a>
                        <a className="blurefect" href="carrito/index.html"><FontAwesomeIcon icon={faCartShopping} className="icon" /></a>
                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
    );
};

export default Nav;

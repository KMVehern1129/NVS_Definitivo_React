//css
import '@css/principal/index.css';
//assets
import settingImage1 from '@assets/imgs/logoNVS.svg'
//librerias
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="container_Principal">
            <header>
                <nav>
                    <div className="container_nav blurefect">
                        <img src={settingImage1} alt="" width="40vh" />
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
                        <a className="blurefect" href="idxlogin/login/index.html"><FontAwesomeIcon icon={faUser} className='icon' /></a>
                        <a className="blurefect" href=""><FontAwesomeIcon icon={faMagnifyingGlass} className='icon' /></a>
                        <a className="blurefect" href="carrito/index.html"><FontAwesomeIcon icon={faCartShopping} className='icon' /></a>
                    </div>
                </nav>
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    )
};

export default Nav;


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faUser , faCartShopping} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return(
    <header className="header-principal">
        <nav className="navbar">
            <div className="container-nav blurefect">
                <img src="img/logoNVS.svg" alt="" width="40vh" />
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="menu/Videojuegos/videojuegos.php">Videojuegos</a></li>
                    <li><a href="menu/Consolas/consolas.php">Consolas</a></li>
                    <li><a href="menu/Nintendo/nintendo.html">Nintendo</a></li>
                    <li><a href="menu/Playstation/playstation.html">PlayStation</a></li>
                    <li><a href="menu/Xbox/xbox.html">Xbox</a></li>
                </ul>
            </div>
            <div className="container-nav-button">
                <a className="blurefect" href="idxlogin/login/index.html"><FontAwesomeIcon icon={faUser} className='icon' /></a>
                <a className="blurefect" href=""><FontAwesomeIcon icon={faMagnifyingGlass} className='icon' /></a>
                <a className="blurefect" href="carrito/index.html"><FontAwesomeIcon icon={faCartShopping} className='icon' /></a>
            </div>
        </nav>
    </header>
)};

export default Nav;


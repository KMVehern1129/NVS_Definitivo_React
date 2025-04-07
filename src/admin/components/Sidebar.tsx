import '../../css/admin/stylesadmin.css'
import settingImage from '../img-admin/setting.png'
import settingImage1 from '../img-admin/logoNVS.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox , faUsers , faMoneyBill1Wave , faStar , faCommentDots , faPaperPlane , faCogs } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
    <div className="sidebar">
            <aside>
                <div className="profile">
                    <img src={settingImage} alt="configuraciones"/>
                    <h2 className="texto1">Admin: Roberto Toto</h2>
                    <p className="texto1">Admin 01</p>
                    <p className="texto2">Se unió: Julio 24 de 2024</p>
                </div>
                <div className="contmenu-logo">
                    <nav className="menu">
                        <ul className="ul-menu">
                            <li>
                                <label htmlFor="usuarios">
                                <FontAwesomeIcon icon={faUsers} className='icon' /> Usuarios
                                </label>
                                <input type="checkbox" id="usuarios"/>
                                <ul>
                                    <a href="../indexadmin.php">
                                        <li>Modificar Usuarios</li>
                                    </a>
                                    <a href="../usuarios/admin.php">
                                        <li>Modificar Cliente</li>
                                    </a>
                                    <a href="../usuarios/admin.php">
                                        <li>Modificar Administrador</li>
                                    </a>
                                </ul>
                            </li>

                            <li>
                                <label htmlFor="productos">
                                    <FontAwesomeIcon icon={faBox} className='icon'/> Productos
                                </label>
                                <input type="checkbox" id="productos"/>
                                <ul>
                                    <a href="../productos/anadir_productos.php">
                                        <li>Añadir Producto</li>
                                    </a>
                                    <a href="../productos/mod_producto_con.php">
                                        <li>Modificar Consolas</li>
                                    </a>
                                    <a href="../productos/anadir_productos.php">
                                        <li>Modificar Videojuegos</li>
                                    </a>
                                    <a href="../productos/mod_desarrollador.php">
                                        <li>Modificar Desarrollador</li>
                                    </a>
                                    <a href="../productos/mod_marca.php">
                                        <li>Modificar Marca</li>
                                    </a>
                                    <a href="../productos/mod_lenguaje.php">
                                        <li>Modificar Lenguaje</li>
                                    </a>
                                    <a href="../productos/mod_genero.php"> 
                                        <li>Modificar Genero</li>
                                    </a>
                                </ul>
                            </li>

                            <li>
                                <label htmlFor="factura">
                                <FontAwesomeIcon icon={faMoneyBill1Wave} className='icon'/> Facturas
                                </label>
                                <input type="checkbox" id="factura"/>
                                <ul>
                                   <a href="../factura/factura.php">
                                        <li>Facturas</li>
                                    </a>
                                    <a href="../htmlFor/indexhtmlFor.php">
                                        <li>htmlFor Pago</li>
                                    </a>
                                </ul>
                            </li>

                            <li>
                                <label htmlFor="puntos">
                                    <FontAwesomeIcon icon={faStar} className='icon' /> Puntos
                                </label>
                                <input type="checkbox" id="puntos"/>
                                <ul>
                                    <a href="../puntos_cliente/historial-puntos.php">
                                       <li>Historial de Puntos</li>
                                    </a>
                                    <a href="../puntos_cliente/mod_puntoscli.php">
                                       <li>Puntos Clientes</li>
                                    </a>
                                </ul>
                            </li>

                            <li>
                                <label htmlFor="calificacion">
                                    <FontAwesomeIcon icon={faCommentDots} className='icon'/> Calificacion
                                </label>
                                <input type="checkbox" id="calificacion"/>
                                <ul>
                                    <a href="calificacion_producto-Cliente.php">
                                       <li>Calificacion Producto-Cliente</li>
                                    </a>
                                    <a href="calificacion_producto-Final.php">
                                       <li>Calificacion Producto-Final</li>
                                    </a>
                                </ul>
                            </li>

                            <li>
                                <label htmlFor="envios">
                                 <FontAwesomeIcon icon={faPaperPlane} className='icon'/>Envios
                                </label>
                                <input type="checkbox" id="envios"/>
                                <ul>
                                    <a href="../envios/mod_envio.php">
                                        <li>Envios</li>
                                    </a>
                                    <a href="../envios/mod_estadoenvio.php">
                                    <li>Estado de envio</li>
                                    </a>
                                    
                                </ul>
                            </li>
                            <li>
                                <label htmlFor="soporte">
                                    <FontAwesomeIcon icon={faCogs} className='icon' /> Soporte
                                </label>
                                <input type="checkbox" id="soporte"/>
                                <ul>
                                    <a href="../soporte/mod_soporte.php">
                                    <li>PQRS</li>
                                    </a>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <img src={settingImage1} alt="" className="logo"/>
                </div>
            </aside>
        </div>
) };

export default Sidebar;

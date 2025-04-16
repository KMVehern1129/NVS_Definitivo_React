import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/calificacion">Calificacion Crud</Link>
                </li>
                <li>
                    <Link to="/controlador">Controlador B</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>
)}
export default Layout
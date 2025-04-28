import { Routes, Route } from "react-router-dom"

//components
import Nav from "@components/nav";

//contexts
import { ApiProducto } from "@contexts/productContext";

//css
import '@css/principal/index.css';

//pages
import Principal from "@pages/Inicio";
import Tienda_Videojuegos from "@pages/tiendaVideojuegos";
import Tienda_Consolas from "@pages/tiendaConsolas";
import Tienda_Nintendo from "@pages/tiendaNintendo";
import Tienda_Play from "@pages/tiendaPlay";
import Tienda_Xbox from "@pages/tiendaXbox";
import Calificacion_Cli_Pro from "@pages/Calificacion_prod_cli";
import Login from './Form/Login';
import RecuperarContrasena from "./Form/RecuperarContrasena";
import DetallesVideojuego from "@pages/detallesVideojuego";
import Registrar from "./Form/Registrar";
import VistaUsuarioCorreo from "@pages/Vista_Controlador_Usuario";
import Correo from "@components/Controlador_Usuario B/Correo";
import Contrasena from "@components/Controlador_Usuario B/Contrasena";
import Nombre from "@components/Controlador_Usuario B/Nombre";
import Direccion from "@components/Controlador_Usuario B/Direccion";




function App() {
  return (
    <ApiProducto>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/Inicio" element={<Principal />} />
          <Route path="/TiendaVideojuegos" element={<Tienda_Videojuegos />} />
          <Route path="/TiendaConsolas" element={<Tienda_Consolas />} />
          <Route path="/TiendaNintendo" element={<Tienda_Nintendo />} />
          <Route path="/TiendaPlayStation" element={<Tienda_Play />} />
          <Route path="/TiendaXbox" element={<Tienda_Xbox />} />
          <Route path="/detallesVideojuego" element={<DetallesVideojuego />} />
          <Route path="/Usuario" element={<VistaUsuarioCorreo />} >
            <Route path="/Usuario/Correo" element={<Correo />} />
            <Route path="/Usuario/Nombre" element={<Nombre />} />
            <Route path="/Usuario/Direccion" element={<Direccion />} />
            <Route path="/Usuario/Contraseña" element={<Contrasena />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Administrador/Calificaciones/" element={<Calificacion_Cli_Pro />}></Route>
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/RecuperarContrasena" element={<RecuperarContrasena />} />

      </Routes>
    </ApiProducto>
  )
}

export default App;

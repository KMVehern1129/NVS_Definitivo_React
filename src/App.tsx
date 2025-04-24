import { Routes, Route } from "react-router-dom"

//components
import Nav from "@components/nav";

//contexts
import { ApiProducto } from "@contexts/productContext";
import { ApiCarrito } from "@contexts/carritoContext";
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


function App() {
  return (
    <ApiProducto>
      <Routes>
        <Route element={<ApiCarrito/>}>
          <Route path="/" element={<Nav />}>
            <Route path="/Inicio" element={<Principal />} />
            <Route path="/TiendaVideojuegos" element={<Tienda_Videojuegos />} />
            <Route path="/TiendaConsolas" element={<Tienda_Consolas />} />
            <Route path="/TiendaNintendo" element={<Tienda_Nintendo />} />
            <Route path="/TiendaPlayStation" element={<Tienda_Play />} />
            <Route path="/TiendaXbox" element={<Tienda_Xbox />} />
          </Route>
        </Route>
        <Route path="/Administrador/Calificaciones/" element={<Calificacion_Cli_Pro />}></Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </ApiProducto>
  );
}

export default App;

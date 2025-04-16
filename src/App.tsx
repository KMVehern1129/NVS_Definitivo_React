import { Routes, Route } from "react-router-dom"
import Layout from "./admin/Pages/layout"
import Calificacion_Cli_Pro from "./admin/Pages/Calificacion_prod_cli"
import Figure from "./Controlador_Usuario B/components/Vista_Controlador_Usuario"
import Home from "./home"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="calificacion" element={<Calificacion_Cli_Pro/>} />
        <Route path="controlador" element={<Figure/>} />
      </Route>
    </Routes>
  ) 
}

export default App

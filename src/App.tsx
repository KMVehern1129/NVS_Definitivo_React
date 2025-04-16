<<<<<<< HEAD
import { Routes, Route } from "react-router-dom"
import Layout from "./admin/Pages/layout"
import Calificacion_Cli_Pro from "./admin/Pages/Calificacion_prod_cli"
import Figure from "./Controlador_Usuario B/components/Vista_Controlador_Usuario"
import Home from "./home"
=======
import Nav from './Controlador_Usuario B/components/Vista_Usuario_Correo/components/Nav';
import Section from './Controlador_Usuario B/components/Vista_Usuario_Correo/components/Section';
import Article from './Controlador_Usuario B/components/Vista_Usuario_Correo/components/Article';
import Form from './Controlador_Usuario B/components/Vista_Usuario_Correo/components/Form';
import './Css-Usuarios/styles.css'
>>>>>>> d443b338a0455cdf6de0fdf2aa6c4b065b28b7e5

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="calificacion" element={<Calificacion_Cli_Pro/>} />
        <Route path="controlador" element={<Figure/>} />
      </Route>
    </Routes>
  ) 
=======
    <div>
      <Nav />
      <Section />
      <Article />
      <Form />
    </div>
  );
>>>>>>> d443b338a0455cdf6de0fdf2aa6c4b065b28b7e5
}

export default App;

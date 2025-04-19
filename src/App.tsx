import { Routes, Route } from "react-router-dom"
import Calificacion_Cli_Pro from "@pages/Calificacion_prod_cli";
import Inicio from "@pages/Inicio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/calificacion" element={<Calificacion_Cli_Pro/>} />
      
    </Routes>
  );
}

export default App;

import Nav from './components/nav';
import Section from './Controlador_Usuario B/components/Vista_Usuario_Correo/components/Section';
import Article from './Controlador_Usuario B/components/Vista_Usuario_Correo/components/Article';
import Form from './Controlador_Usuario B/components/Vista_Usuario_Correo/components/Form';
import './css/Css-Usuarios/styles.css'
import './css/principal/index.css'

function App() {
  return (
    <div className="Container_Principal">
      <Nav />
      <Section />
      <Article />
      <Form />
    </div>
  );
}

export default App;

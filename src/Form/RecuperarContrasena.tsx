import {
    Container,
    LeftSection,
    Container_Form
  } from "../elements/FormElements";
  
  import Formulario from "../components/forms/recuperarContrasena/Formulario";
  import Instrucciones from "../components/forms/recuperarContrasena/Instrucciones";
  import ImagenDecorativa from "../components/forms/comun/ImagenDecorativa";
  
  const RecuperarContrasena = () => (
    <main>
      <Container>
        <LeftSection>
          <Container_Form>
            <Instrucciones />
            <Formulario />
          </Container_Form>
        </LeftSection>
        <ImagenDecorativa />
      </Container>
    </main>
  );
  
  export default RecuperarContrasena;
  
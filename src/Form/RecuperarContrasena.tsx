import { useState } from 'react';
import {
  Container,
  LeftSection,
  Container_Form,
  ImgHeader,
  Imagen,
  P,
  Form,
  Input,
  Boton,
  RightSection,
  Figure
} from "../elements/FormElements"; 

import Imagenes from '@components/forms/comun/imgComponent';

const RecuperarContrasena = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('El campo no puede estar vacío');
    } else if (!email.includes('@')) {
      setError('Debe contener un @ válido');
    } else {
      setError('');
      // Aquí puedes enviar el formulario
      console.log('Formulario enviado con:', email);
    }
  };

  return (
    <main>
      <Container>
        <LeftSection>
          <Container_Form>
            <ImgHeader>
              <Imagen src={Imagenes[1]} alt="logo" />
            </ImgHeader>
            <P>
              Por favor, introduce la dirección de correo electrónico que
              utilizaste para registrarte. Te enviaremos un e-mail con tu nueva
              contraseña. Revisa el correo no deseado si no lo recibes. En caso
              de complicaciones, envíanos un mensaje a: support@nvs.com
              contáctenos.
            </P>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ border: error ? '1px solid red' : '' }}
              />
              {error && <P style={{ color: 'red', fontSize: '14px' }}>{error}</P>}
              <Boton type="submit">Enviar</Boton>
            </Form>
          </Container_Form>
        </LeftSection>
        <RightSection>
          <Figure>
            <img src={Imagenes[0]} alt="decoración" />
          </Figure>
        </RightSection>
      </Container>
    </main>
  );
};

export default RecuperarContrasena;

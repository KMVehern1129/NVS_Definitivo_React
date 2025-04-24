
import { useState } from "react";
import { Form, Input, P, Boton } from "../../../elements/formElements";
import { ApiPost } from "@hooks/UseAxios";

const Formulario = () => {
  const endpoint: string = '/Usuarios/recuperarContrasena.php';
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [respuesta, setRespuesta] = useState('');
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {email:email};

    if (!email) {
      setError('El campo no puede estar vacío');
    } else if (!email.includes('@')) {
      setError('Debe contener un @ válido');
    } else {
      setError('');
      try {
        const res = await ApiPost
        (endpoint,data); 
        setRespuesta(res.data.message);
      } catch (err) {
        setRespuesta("Hubo un error al procesar la solicitud.");
      }
    }
  };

  


return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ border: error ? '1px solid red' : '' }}
      />
      {error && <P style={{ color: 'red', fontSize: '14px' }}>{error}</P>}
      {respuesta && <P style={{ color: 'green', fontSize: '14px' }}>{respuesta}</P>}
      <Boton type="submit">Enviar</Boton>
    </Form>
  );
};

export default Formulario;

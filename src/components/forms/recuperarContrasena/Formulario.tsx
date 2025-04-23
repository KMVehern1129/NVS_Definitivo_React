import { useState } from "react";
import { Form, Input, P, Boton } from "../../../elements/FormElements";

const Formulario = () => {
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
      console.log('Formulario enviado con:', email);
    }
  };

  return (
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
  );
};

export default Formulario;

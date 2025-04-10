import React, {useState} from "react";
import styled from "styled-components";
import Imagenes from "./assets/imagenes";
import {Form, Container_Form, Section, Figure, ImgHeader,
  Boton} from "./elements/Form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import InputComponent  from "./components/InputComponent";




const App = () => {

  const [email,ChangeEmail] = useState({campo:'',valido:null});
  const [password,ChangePassword] = useState({campo:'',valido:null});

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  return (
    <main>
      <Section>
        <Container_Form>
          <Form action="">
            <ImgHeader>
              <img src={Imagenes[1]} className="imgHeader" />
            </ImgHeader>
            <InputComponent
              estado={email}
              cambiarEstado={ChangeEmail}
              type="text"
              placeholder="CORREO"
              name="email"
              inputError="Correo invalido"
              expresionRegular={expresiones.usuario}
            />
            <InputComponent
              estado={password}
              cambiarEstado={ChangePassword}
              type="password"
              placeholder="CONTRASEÑA"
              name="password"
              inputError="La contraseña debe tener un signo de puntuacion, una mayuzcula y un numero"
              expresionRegular=""
            />
  
            <Boton type="submit">INGRESAR</Boton>
          </Form>
        </Container_Form>
        <Figure>
          <img src={Imagenes[0]} />
        </Figure>
      </Section>
    </main>
  );
}

export default App;